import * as actionTypes from "../Action/ActionType.jsx"


const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.idToken,
        loading: false
      }
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        token: null,
      }
    default:
      return state;
  }
}

export default reducer;
