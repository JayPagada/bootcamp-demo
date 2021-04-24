import api from "../../Axios-Orders.jsx"
import * as actionsTypes from "./ActionType.jsx"
export const getCurrentCoursesRequest = () => {
  return {
    type: actionsTypes.GET_CURRENT_COURSES_REQUEST,
  };
};

export const getCurrentCoursesSuccess = (getCourses) => {
  return {
    type: actionsTypes.GET_CURRENT_COURSES_SUCCESS,
    getCourses: getCourses,
  };
};

export const getCurrentCoursesFailure = (error) => {
  return {
    type: actionsTypes.GET_CURRENT_COURSES_FAILURE,
    error: error,
  };
};

export const getCourseData = (id)=>{
  return dispatch => {
    dispatch(getCurrentCoursesRequest());
    id.map(idData=>{
      api.get(`bootcamps/${idData}/courses`)
        .then(response=>{
          dispatch(getCurrentCoursesSuccess(response.data.data))
        })
        .catch(error=>{
          dispatch(getCurrentCoursesFailure(error.message))
        })
    })

  };
};
