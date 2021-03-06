import api from "../../../Axios-Orders.jsx"
import * as actionsTypes from "../ActionType.jsx"
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
