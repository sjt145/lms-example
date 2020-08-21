import React, { useState, useEffect } from 'react';
import { PrimaryButton, ModalWrap, Input } from '../../../components';
import { saveCourse } from '../../../store/actions/course';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import List from './List'
import Create from './Create';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';

const Course = () => {
  const [isCreate, setIsCreate] = useState(true)
  const [lgShow, setLgShow] = useState(false);
  const [newCourse, setNewCourse] = useState({});
  const [listOfCourses, setListOfCourses] = useState([]);
  const [originallistOfCourses, setoriListOfCourses] = useState([]);

  const dispatch = useDispatch();

  const courseRedux = useSelector(state => state.courseState.course);

  useEffect(() => {
    setListOfCourses(courseRedux);
    setoriListOfCourses(courseRedux);
  }, [courseRedux])


  // useEffect(() => {
  //   console.log("newCourse...", newCourse);
  // }, [newCourse])

  const createCourse = () => {
    setLgShow(!lgShow)
    // setNewCourse({})
  }
  const sumbitCourse = () => {
    // listOfCourses.push(newCourse); //failed to work 
    //desturcturing failed version
    // const newCourseArray = [...listOfCourses];
    // newCourseArray.push(newCourse)
    // setListOfCourses(newCourseArray)

    // axios.post('https://react-hook-redux.firebaseio.com/course.json', { course: newCourse });
    dispatch(saveCourse(newCourse));
  }
  const editSudmitcourse = () => {
    // const noneditedCourse = newCourseArray.filter(course => course.id !== newCourse.id)
    // setListOfCourses([...noneditedCourse, newCourse])
    const newCourseArray = listOfCourses.map(course => {
      return course.id === newCourse.id ? newCourse : course
    })
    setListOfCourses(newCourseArray)
  }
  const editCourse = (editcourse) => {
    setLgShow(true)
    setNewCourse(editcourse)
    setIsCreate(false)
  }
  const filterCourse = (event) => {
    //make copy of array
    const filteredCourseArray = originallistOfCourses.filter(course => course.courseName.toLowerCase().startsWith(event.target.value.toLowerCase()))
    setListOfCourses(event.target.value === '' ? originallistOfCourses : filteredCourseArray)
  }
  return (
    <div>
      Course <br /> <br />
      <PrimaryButton text="Create New Course" onClick={() => createCourse()} />
      <div style={{ maxWidth: '600px', margin: '0 auto', marginTop: '10px' }}>
        <Input name='FilterbyName' text='Filter by Name' onChange={(val) => filterCourse(val)} />
      </div>
      <List listOfCourses={listOfCourses} lgShow={lgShow} onClick={(editcourse) => editCourse(editcourse)} />
      <ModalWrap isCreate={isCreate} editSudmitcourse={editSudmitcourse} title="Create New Course" sumbit={sumbitCourse} lgShow={lgShow} setLgShow={setLgShow}>
        <Create newCourse={newCourse} setNewCourse={setNewCourse} />
      </ModalWrap>
    </div>
  )
}

export default withErrorHandler(Course,axios);