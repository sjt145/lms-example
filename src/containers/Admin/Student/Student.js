import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PrimaryButton, ModalWrap, Input } from '../../../components';
import axios from 'axios';
import { saveStudent } from '../../../store/actions/students';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';

import List from './List'
import Create from './Create'
const Student = () => {
  const [isCreate, setIsCreate] = useState(true)
  const [lgShow, setLgShow] = useState(false);
  const [newStudent, setnewStudent] = useState({})
  const [listofstudents, setlistofstudent] = useState([])
  const [originallistofstudents, setorglistofstudent] = useState([])

  const dispatch = useDispatch();
  const studentRedux = useSelector(state => state.studentState.student);
  useEffect(() => {
   setlistofstudent(studentRedux)
   setorglistofstudent(studentRedux)
  }, [studentRedux])

  const editStudent = (editstudent) => {
    setLgShow(true)
    setnewStudent(editstudent)
    setIsCreate(false)
    console.log('studentsssssssss', editstudent)
  }

  const createStudent = () => {
    setLgShow(!lgShow)
    // setnewStudent({})
  }
  
  const submit = () => {
    console.log(newStudent);
    // const newstudentArray = [...listofstudents]
    // newstudentArray.push(newStudent)
    // setlistofstudent(newstudentArray)

    // axios.post('https://react-hook-redux.firebaseio.com/student.json', { student: newStudent });
    dispatch(saveStudent(newStudent));
  }

  const editStudentSubmit = () => {
    // const noneditedCourse = newCourseArray.filter(course => course.id !== newCourse.id)
    // setListOfCourses([...noneditedCourse, newCourse])
    const newStudentArray = listofstudents.map(student => {
      return student.id === newStudent.id ? newStudent : student
    })
    setlistofstudent(newStudentArray)
  }
  const filterCourse = (event) => {
    //make copy of array
    const filteredStudentArray = originallistofstudents.filter(student => student.userName.toLowerCase().startsWith(event.target.value.toLowerCase()))
    setlistofstudent(event.target.value === '' ? originallistofstudents : filteredStudentArray)
  }
  return <div>
    Student <br /> <br />
    <PrimaryButton text="Add New Student" onClick={() => createStudent()} />
    <div style={{ maxWidth: '600px', margin: '0 auto', marginTop: '10px' }}>
      <Input name='FilterbyName' text='Filter by Name' onChange={(val) => filterCourse(val)} />
    </div>
    <List listofStudents={listofstudents} lgShow={lgShow} onClick={(editstudent) => editStudent(editstudent)} />
    <ModalWrap isCreate={isCreate} editStudentSubmit={editStudentSubmit} title="Add New Student" sumbit={submit} lgShow={lgShow} setLgShow={setLgShow}>
      <Create setnewStudent={setnewStudent} newStudent={newStudent} />
    </ModalWrap>
  </div>
}

export default withErrorHandler(Student,axios);