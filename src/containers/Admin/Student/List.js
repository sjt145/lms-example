import React, { useState,useEffect } from 'react';
import {TableWrap} from '../../../components'
import { useDispatch, useSelector } from 'react-redux';
import { getStudent } from '../../../store/actions/students';
const List = ({onClick,lgShow}) => {
  const dispatch = useDispatch();

  const listofStudents = useSelector(state => state.studentState.list)

  useEffect(() => {
    dispatch(getStudent())
  }, [])
  const tableHeader=['Id','City','Email','FirstName','Gender','LastName','Password','UserName','Actions']
  return <TableWrap tableHeads={tableHeader} tableRows={listofStudents} onClick={onClick}/>
}

export default List;