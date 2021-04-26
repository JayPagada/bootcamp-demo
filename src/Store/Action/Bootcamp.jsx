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
  return dispatch => {
    dispatch(getCurrentBootcampRequest());
    api.get('bootcamps',)
      .then(response=>{
        dispatch(getCurrentBootcampSuccess(response.data.data))
      })
      .catch(error=>{
        dispatch(getCurrentBootcampFailure(error.response.data.error))
      })
  };
};

export const deleteData = (id)=>{
  return dispatch => {
    dispatch(getCurrentBootcampRequest());
    api.delete(`bootcamps/${id}`)
      .then(response=>{
        dispatch(getCurrentBootcampSuccess(response.data.data))
      })
      .catch(error=>{
        dispatch(getCurrentBootcampFailure(error.response.data.error))
      })
  };
};

export const editData = (id,values)=>{
  return dispatch => {
    dispatch(getCurrentBootcampRequest());
    api.put(`bootcamps/${id}`,
      {data:{
        "housing": true,
        "name": values.name,
        "description": values.description
      }})
      .then(response=>{
        dispatch(getCurrentBootcampSuccess(response.data.data))
      })
      .catch(error=>{
        dispatch(getCurrentBootcampFailure(error.response.data.data.error))
      })
  };
};
