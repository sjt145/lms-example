import React, { useState ,useEffect} from 'react';
import {TableWrap} from '../../../components'
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from '../../../store/actions/course';
const List = ({onClick}) => {
  // const [course,setCourses]=useState([
  //   {
  //     id:1,
  //     name:'React course',
  //     category:1,
  //     subcategory:2,
  //     fees:1000
  //   }
  // ])
  const dispatch = useDispatch();

  const listOfCourses = useSelector(state => state.courseState.list)

  useEffect(() => {
    dispatch(getCourses())
  }, [])

  const tableHeader=['Id','Category','CourseName','Fees','SubCategory','Actions']
  return <TableWrap tableHeads={tableHeader} tableRows={listOfCourses} onClick={onClick} />
}

export default List;