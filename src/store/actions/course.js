
import * as actionType from './types';
import axios from 'axios'
export const saveCourse = (newCourse) => {
  return dispatch => {
    dispatch(saveCourseStart())
    try {
      axios.post('https://react-hook-redux.firebaseio.com/course.json?auth=' + localStorage.getItem('token'), { course: newCourse })
        .then((response) => {
          console.log("add response..", response);
          dispatch(saveCourseSuccess(newCourse))
        })
        .catch(error => {
          console.log("error..", error);
          dispatch(saveCourseFailure(error))
        })
    } catch (error) {
      dispatch(saveCourseFailure(error))
    }
  }
}

export const saveCourseStart = () => {
  return {
    type: actionType.COURSE_SAVE_START
  }
}

export const saveCourseSuccess = (newCourse) => {
  return {
    type: actionType.COURSE_SAVE_SUCCESS,
    value: newCourse
  }
}

export const saveCourseFailure = (error) => {
  return {
    type: actionType.COURSE_SAVE_FAILURE,
    value: error
  }
}



export const fetchCourseState = () => {
  return {
    type: actionType.COURSE_LIST_START
  }
}

export const fetchCourseSuccess = (listOfCourses) => {
  return {
    type: actionType.COURSE_LIST_SUCCESS,
    value: listOfCourses
  }
}

export const fetchCourseFailure = (error) => {
  return {
    type: actionType.COURSE_LIST_FAILURE,
    value: error
  }
}

export const getCourses = (newCourse) => {
  return dispatch => {
    dispatch(fetchCourseState())
    try {
      axios.get('https://react-hook-redux.firebaseio.com/course.json?auth=' + localStorage.getItem('token'))
        .then((response) => {
          console.log("response..", response);

          let courseList = [];

          for (let key in response.data) {
            courseList.push({ key: key, ...response.data[key].course })
          }

          dispatch(fetchCourseSuccess(courseList))
        })
        .catch(error => {
          console.log("error..", error);
          dispatch(fetchCourseFailure(error))
        })
    } catch (error) {
      dispatch(fetchCourseFailure(error))
    }
  }
}

// axios.post('https://react-hook-redux.firebaseio.com/course.json', { course: newCourse })