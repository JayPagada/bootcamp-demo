import api from "../../Axios-Orders.jsx"
import * as actionsTypes from "./ActionType.jsx"
export const getCurrentUserRequest = () => {
  return {
    type: actionsTypes.GET_CURRENT_USER_REQUEST,
  };
};

export const getCurrentUserSuccess = (currentUser) => {
  return {
    type: actionsTypes.GET_CURRENT_USER_SUCCESS,
    currentUser: currentUser,
  };
};

export const getCurrentUserFailure = (error) => {
  return {
    type: actionsTypes.GET_CURRENT_USER_FAILURE,
    error: error,
  };
};

export const getUser = ()=>{
  const token = localStorage.getItem('token');
  return dispatch => {
    dispatch(getCurrentUserRequest());
    api.get('auth/me',{headers:{'Authorization':`Bearer ${token}`}})
      .then(response=>{
        console.log(response.data.data)
        dispatch(getCurrentUserSuccess(response.data.data))
      })
      .catch(error=>{
        console.log(error)
        dispatch(getCurrentUserFailure(error.message))
      })
  };
};
