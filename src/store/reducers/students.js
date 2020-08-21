import * as actionType from '../actions/types';

const initialState = {
  student: [],
  loading: false,
  error: null
};

function student(state = initialState, action) {
  // switch (action.type) {
  //   case actionType.SAVE_STUDENTS:
  //     const newStudentArray = [...state.student];
  //     newStudentArray.push(action.value);

  //     return { student: newStudentArray };
  //   default:
  //     return state;
  // }

  switch (action.type) {
    case actionType.STUDENT_SAVE_START:
      // return { student: [...state.student], loading: true, error: null };
      return { ...state, student: [...state.student], loading: true, error: null };
    case actionType.STUDENT_SAVE_SUCCESS:
      const newStudentArray = [...state.list];
      newStudentArray.push(action.value);
      return { ...state, list: newStudentArray, loading: false, error: null };
    // return { student: newStudentArray, loading: false, error: null };

    case actionType.STUDENT_SAVE_FAILURE:
      return { student: [...state.student], loading: false, error: action.value };
    case actionType.STUDENT_LIST_START:
      return { ...state, loading: true, error: null };

    case actionType.STUDENT_LIST_SUCCESS:
      return { ...state, loading: false, error: null, list: action.value };

    case actionType.STUDENT_LIST_FAILURE:
      return { ...state, loading: false, error: action.value };

    default:
      return state;
  }
}

export default student;