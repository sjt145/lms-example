import React, { useState } from 'react';
import {TableWrap} from '../../../components'
const List = ({listOfCourses,setLgShow,lgShow}) => {
  // const [course,setCourses]=useState([
  //   {
  //     id:1,
  //     name:'React course',
  //     category:1,
  //     subcategory:2,
  //     fees:1000
  //   }
  // ])

  const tableHeader=['Id','Name','Category','SubCategory','Fees','Actions']
  return <TableWrap tableHeads={tableHeader} tableRows={listOfCourses} setLgShow={setLgShow} />
}

export default List;