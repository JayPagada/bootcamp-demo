import api from "../../../Axios-Orders.jsx"
import * as actionsTypes from "../ActionType.jsx"
import * as bootcampActions from "./Bootcamp";

export const deleteBootcampRequest = () => {
  return {
    type: actionsTypes.DELETE_BOOTCAMP_REQUEST,
  };
};

export const deleteBootcampSuccess = (bootCamps) => {
  return {
    type: actionsTypes.DELETE_BOOTCAMP_SUCCESS,
    editData: bootCamps,
  };
};

export const deleteBootcampFailure = (error) => {
  return {
    type: actionsTypes.DELETE_BOOTCAMP_FAILURE,
    error: error,
  };
};

export const deleteData = (id)=>{
  return dispatch => {
    dispatch(deleteBootcampRequest());
    api.delete(`bootcamps/${id}`)
      .then(response=>{
        dispatch(deleteBootcampSuccess(response.data.data))
        dispatch(bootcampActions.getBootcamp())
      })
      .catch(error=>{
        dispatch(deleteBootcampFailure(error.response.data.error))
      })
  };
};
