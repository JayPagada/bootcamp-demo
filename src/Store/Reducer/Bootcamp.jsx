import * as actionTypes from "../Action/ActionType.jsx"


const initialState = {
  bootCamps:[],
  error: null,
  loading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CURRENT_BOOTCAMP_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.GET_CURRENT_BOOTCAMP_SUCCESS:
      const bootCamps = action?.bootCampsData?.map((bootcamp, index) => {
        return {
          key: index,
          name: bootcamp.name,
          email: bootcamp.email,
          phone: bootcamp.phone,
          website: bootcamp.website,
        };
      });
      return {
        ...state,
        bootCamps,
        loading: false
      }
    case actionTypes.GET_CURRENT_BOOTCAMP_FAILURE:
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
