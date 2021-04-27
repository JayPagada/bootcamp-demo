import * as actionTypes from "../Action/ActionType.jsx"

const initialState = {
  currentUserRole: null ,
  currentUser: null,
  currentUserEmail:null,
  currentUserId:null,
  error: null,
  loading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CURRENT_USER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        currentUserRole: action.currentUser.role ,
        currentUser: action.currentUser.name ,
        currentUserEmail:action.currentUser.email,
        currentUserId:action.currentUser._id,
        loading: false
      }
    case actionTypes.GET_CURRENT_USER_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    default:
      return state;
  }
}
export default reducer;
