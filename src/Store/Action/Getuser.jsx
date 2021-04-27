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
  return dispatch => {
    dispatch(getCurrentUserRequest());
    api.get('auth/me')
      .then(response=>{
        dispatch(getCurrentUserSuccess(response.data.data))
      })
      .catch(error=>{
        dispatch(getCurrentUserFailure(error.response.data.error))
      })
  };
};
