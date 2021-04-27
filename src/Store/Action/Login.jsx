import * as actionsTypes from "./ActionType.jsx"
import axios from "axios";

const BaseUrl= "https://nodejs-dev-camper-api.herokuapp.com/api/v1/"
export const authStart = ()=>{
  return{
    type:actionsTypes.AUTH_START
  };
}
export const authSuccess = (token,success)=>{
  return{
    type:actionsTypes.AUTH_SUCCESS,
    idToken:token,
    success:success
  };
}
export const authFail = (error)=>{
  return{
    type:actionsTypes.AUTH_FAIL,
    error:error
  };
}
export const logout = ()=>{
  localStorage.removeItem("token")
  localStorage.removeItem("success")
  return{
    type:actionsTypes.AUTH_LOGOUT
  };
};

export const auth = (email,password,props)=>{
  return dispatch => {
    dispatch(authStart());
    const authData ={
      "email":email,
      "password":password
    }
    axios.post( BaseUrl + "auth/login",authData)
      .then(response=>{
        localStorage.setItem("token",response.data.token)
        localStorage.setItem("success",response.data.success)
        dispatch(authSuccess(response.data.token,response.data.success))
        props.history.push('/MainLayout/Dashboard')
      })
      .catch(error=>{
          dispatch(authFail(error.response.data.error))

      })
  };
};

export const REGISTER = (name,email,password,role,props)=>{
  return dispatch => {
    dispatch(authStart());
    const authData ={
      "name":name,
      "email":email,
      "password":password,
      "role":role
    }

    axios.post(BaseUrl + "auth/register",authData)
      .then(response=>{
        localStorage.setItem("token",response.data.token)
        localStorage.setItem("success",response.data.success)
        dispatch(authSuccess(response.data.token,response.data.success))
        props.history.push('/MainLayout/Dashboard')
      })
      .catch(error=>{
        dispatch(authFail(error.response.data.error))
      })
  };
};

export const authCheckState = () =>{
  return dispatch => {
    const token = localStorage.getItem("token")
    if (!token){
      dispatch(logout());
    }
    else {
        dispatch(authSuccess(token))
      }
    }
}
