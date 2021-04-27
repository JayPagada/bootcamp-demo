import * as actionTypes from "../Action/ActionType.jsx"

const initialState = {
  Courses:[],
  error: null,
  loading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CURRENT_COURSES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.GET_CURRENT_COURSES_SUCCESS:
      const Courses = action?.getCourses?.map((courses, index) => {
        return {
          key: index,
          title: courses.title,
          description: courses.description,
        };
      });
      return {
        ...state,
        Courses,
        loading: false
      }
    case actionTypes.GET_CURRENT_COURSES_FAILURE:
      return {
        ...state,
        error: action?.error,
        loading: false
      }
    default:
      return state;
  }
}
export default reducer;
