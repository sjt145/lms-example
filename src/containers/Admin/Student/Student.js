import React, { useState, useEffect } from 'react';
import { PrimaryButton, ModalWrap } from '../../../components';
import Create from './Create'
const Student = () => {
  const [lgShow, setLgShow] = useState(false);
  const [newStudent, setnewStudent] = useState({})
  useEffect(() => {
    console.log("newstudent...", newStudent);
  }, [newStudent])
  const submit = () => {
    console.log(newStudent);
  }
  return <div>
    Student <br /> <br />
    <PrimaryButton text="Add New Student" onClick={() => setLgShow(!lgShow)} />
    <ModalWrap title="Add New Student" sumbit={submit} lgShow={lgShow} setLgShow={setLgShow}>
      <Create newStudent={setnewStudent} />
    </ModalWrap>
  </div>
}

export default Student;