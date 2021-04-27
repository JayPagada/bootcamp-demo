import * as actionTypes from "../../Action/ActionType.jsx"


const initialState = {
  bootCamps:[],
  error: null,
  loading: false
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_BOOTCAMP_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.DELETE_BOOTCAMP_SUCCESS:
      return {
        ...state,
        bootCamps:action.editData,
        loading: false
      }
    case actionTypes.DELETE_BOOTCAMP_FAILURE:
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
