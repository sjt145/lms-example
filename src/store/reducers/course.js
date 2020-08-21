import * as actionType from '../actions/types';

const initialState = {
  course: [],
  loading: false,
  error: null
};

function course(state = initialState, action) {
  switch (action.type) {
    case actionType.COURSE_SAVE_START:
      return { ...state, course: [...state.course], loading: true, error: null };

    case actionType.COURSE_SAVE_SUCCESS:
      const newCourseArray = [...state.list];
      newCourseArray.push(action.value);

      return { ...state, list: newCourseArray, loading: false, error: null };
      // return { course: newCourseArray, loading: false, error: null };
    case actionType.COURSE_SAVE_FAILURE:
      return { ...state, course: [...state.course], loading: false, error: action.value };

    case actionType.COURSE_LIST_START:
      return { ...state, loading: true, error: null };

    case actionType.COURSE_LIST_SUCCESS:
      return { ...state, loading: false, error: null, list: action.value };

    case actionType.COURSE_LIST_FAILURE:
      return { ...state, loading: false, error: action.value };

    default:
      return state;
  }
}

export default course;