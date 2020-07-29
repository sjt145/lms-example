import React, { useState, useEffect } from 'react';
import { PrimaryButton, ModalWrap, Input } from '../../../components';
import List from './List'
import Create from './Create';

const Course = () => {
  const [isCreate, setIsCreate] = useState(true)
  const [lgShow, setLgShow] = useState(false);
  const [newCourse, setNewCourse] = useState({});
  const [listOfCourses, setListOfCourses] = useState([{
    id: 1,
    courseName: 'CourseName',
    category: 1,
    subCategory: 2,
    fees: 1000
  },
  {
    id: 2,
    courseName: 'React CourseName',
    category: 2,
    subCategory: 1,
    fees: 1500
  }]);
  const [originallistOfCourses, setoriListOfCourses] = useState([{
    id: 1,
    courseName: 'CourseName',
    category: 1,
    subCategory: 2,
    fees: 1000
  },
  {
    id: 2,
    courseName: 'React CourseName',
    category: 2,
    subCategory: 1,
    fees: 1500
  }]);
  useEffect(() => {
    console.log("newCourse...", newCourse);
  }, [newCourse])

  const createCourse = () => {
    setLgShow(!lgShow)
    setNewCourse({})
  }
  const sumbitCourse = () => {
    // listOfCourses.push(newCourse); //failed to work 
    //desturcturing failed version
    const newCourseArray = [...listOfCourses];
    newCourseArray.push(newCourse)
    setListOfCourses(newCourseArray)
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
        <Input name='filter Name' text='Filter Search' onChange={(val) => filterCourse(val)} />
      </div>
      <List listOfCourses={listOfCourses} lgShow={lgShow} setLgShow={(editcourse) => editCourse(editcourse)} />
      <ModalWrap isCreate={isCreate} editSudmitcourse={editSudmitcourse} title="Create New Course" sumbit={sumbitCourse} lgShow={lgShow} setLgShow={setLgShow}>
        <Create newCourse={newCourse} setNewCourse={setNewCourse} />
      </ModalWrap>
    </div>
  )
}

export default Course;