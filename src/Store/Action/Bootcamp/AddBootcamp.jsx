import * as actionsTypes from "../ActionType.jsx"
import * as bootcampActions from "./Bootcamp";
import axios from "axios";
export const addBootcampRequest = () => {
  return {
    type: actionsTypes.ADD_BOOTCAMP_REQUEST,
  };
};

export const addBootcampSuccess = (bootCamps) => {
  return {
    type: actionsTypes.ADD_BOOTCAMP_SUCCESS,
    editData: bootCamps,
  };
};

export const addBootcampFailure = (error) => {
  return {
    type: actionsTypes.ADD_BOOTCAMP_FAILURE,
    error: error,
  };
};

export const addData = (values)=>{
  const getToken = localStorage.getItem('token');
  return dispatch => {
    dispatch(addBootcampRequest());
    axios.post(`https://nodejs-dev-camper-api.herokuapp.com/api/v1/bootcamps`,
      {
        name: values.name,
        description: values.description,
        website: values.website,
        phone: values.phone,
        email: values.email,
        address: "string",
        careers: [
          "Web Development","Data Science", "Business"
        ],
        housing: true,
        jobAssistance: true,
        jobGuarantee: true,
        acceptGi: true
      },{headers: {
      authorization: `Bearer ${getToken}`
    }})
      .then(response=>{
        dispatch(addBootcampSuccess(response.data.data))
        dispatch(bootcampActions.getBootcamp())
      })
      .catch(error=>{
        dispatch(addBootcampFailure(error.response.data.data.error))
      })
  };
};
