import api from "../../../Axios-Orders.jsx"
import * as actionsTypes from "../ActionType.jsx"
import * as bootcampActions from "./Bootcamp";
export const editBootcampRequest = () => {
  return {
    type: actionsTypes.EDIT_BOOTCAMP_REQUEST,
  };
};

export const editBootcampSuccess = (bootCamps) => {
  return {
    type: actionsTypes.EDIT_BOOTCAMP_SUCCESS,
    editData: bootCamps,
  };
};

export const editBootcampFailure = (error) => {
  return {
    type: actionsTypes.EDIT_BOOTCAMP_FAILURE,
    error: error,
  };
};

export const editData = (id,values)=>{
  return dispatch => {
    dispatch(editBootcampRequest());
    api.put(`bootcamps/${id}`,
      {
        "housing": true,
        "name": values.name,
        "description": values.description
      })
      .then(response=>{
        console.log("response =>",response)
        dispatch(editBootcampSuccess(response.data.data))
        dispatch(bootcampActions.getBootcamp())
      })
      .catch(error=>{
        console.log("error =>",error)
        dispatch(editBootcampFailure(error.response.data.data.error))
      })
  };
};
