import React, { useState } from 'react';
import {TableWrap} from '../../../components'
const List = ({listofStudents,setLgShow,lgShow}) => {

  const tableHeader=['Id','FirstName','LastName','Gender','UserName','Email','City','Actions']
  return <TableWrap tableHeads={tableHeader} tableRows={listofStudents} setLgShow={setLgShow}/>
}

export default List;