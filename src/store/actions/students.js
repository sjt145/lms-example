
import * as actionType from './types';
import axios from 'axios'

export const saveStudent = (newStudent) => {
  return dispatch => {
    dispatch(saveStudentStart())
    try {
      axios.post('https://react-hook-redux.firebaseio.com/student.json?auth=' + localStorage.getItem('token'), { student: newStudent })
        .then((response) => {
          console.log("response..", response);
          dispatch(saveStudentSuccess(newStudent))
        })
        .catch(error => {
          console.log("error..", error);
          dispatch(saveStudentFailure(error))
        })
    } catch (error) {
      dispatch(saveStudentFailure(error))
    }
  }
}
export const saveStudentStart = () => {
  return {
    type: actionType.STUDENT_SAVE_START
  }
}

export const saveStudentSuccess = (newStudent) => {
  return {
    type: actionType.STUDENT_SAVE_SUCCESS,
    value: newStudent
  }
}

export const saveStudentFailure = (error) => {
  return {
    type: actionType.STUDENT_SAVE_FAILURE,
    value: error
  }
}

export const fetchStudentState = () => {
  return {
    type: actionType.STUDENT_LIST_START
  }
}

export const fetchStudentSuccess = (listOfStudents) => {
  return {
    type: actionType.STUDENT_LIST_SUCCESS,
    value: listOfStudents
  }
}

export const fetchStudentFailure = (error) => {
  return {
    type: actionType.STUDENT_LIST_FAILURE,
    value: error
  }
}

export const getStudent = () => {
  return dispatch => {
    dispatch(fetchStudentState())
    try {
      axios.get('https://react-hook-redux.firebaseio.com/student.json?auth=' + localStorage.getItem('token'))
        .then((response) => {
          console.log("response..", response);

          let studentList = [];

          for (let key in response.data) {
            studentList.push({ key: key, ...response.data[key].student })
          }

          dispatch(fetchStudentSuccess(studentList))
        })
        .catch(error => {
          console.log("error..", error);
          dispatch(fetchStudentFailure(error))
        })
    } catch (error) {
      dispatch(fetchStudentFailure(error))
    }
  }
}