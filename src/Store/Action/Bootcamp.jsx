import api from "../../Axios-Orders.jsx"
import * as actionsTypes from "./ActionType.jsx"
export const getCurrentBootcampRequest = () => {
  return {
    type: actionsTypes.GET_CURRENT_BOOTCAMP_REQUEST,
  };
};

export const getCurrentBootcampSuccess = (bootCamps) => {
  return {
    type: actionsTypes.GET_CURRENT_BOOTCAMP_SUCCESS,
    bootCampsData: bootCamps,
  };
};

export const getCurrentBootcampFailure = (error) => {
  return {
    type: actionsTypes.GET_CURRENT_BOOTCAMP_FAILURE,
    error: error,
  };
};

export const getBootcamp = ()=>{
  const token = localStorage.getItem('token');
  return dispatch => {
    dispatch(getCurrentBootcampRequest());
    api.get('bootcamps',{headers:{'Authorization':`Bearer ${token}`}})
      .then(response=>{
        console.log(response.data.data)
        dispatch(getCurrentBootcampSuccess(response.data.data))
      })
      .catch(error=>{
        console.log(error)
        dispatch(getCurrentBootcampFailure(error.message))
      })
  };
};
export const deleteData = (id)=>{
  const token = localStorage.getItem('token');
  return dispatch => {
    dispatch(getCurrentBootcampRequest());
    api.delete('bootcamps/{bootcampId}',{
      headers:{'Authorization':`Bearer ${token}`},
      data: {
        id:id
      }})
      .then(response=>{
        console.log(response.data.data)
        dispatch(getCurrentBootcampSuccess(response.data.data))
      })
      .catch(error=>{
        console.log(error)
        dispatch(getCurrentBootcampFailure(error.message))
      })
  };
};
