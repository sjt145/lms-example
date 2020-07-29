import React, { useState, useEffect } from 'react';
import { Input, DropdownWrap, RadioButton } from '../../../components';
const Create = ({ setnewStudent,newStudent }) => {
  const [student, setStudent] = useState(newStudent)
  useEffect(() => {
    setnewStudent(student)
  }, [student])
  const cities = [
    { id: 1, name: 'Toronto' },
    { id: 2, name: 'Ottawa' },
    { id: 3, name: 'Vancouver' },
    { id: 4, name: 'Montreal' },
    { id: 5, name: 'Winnipeg' },
    { id: 6, name: 'Hamilton' },
    { id: 7, name: 'Mississauga' }
  ]
  const setstudentDetails = (key, value) => {
    setStudent({ ...student, [key]: value });
  }
  return <div className="student">
    <Input name="firstName" value={student.firstName} text="First Name" autoFocus={true} onChange={(e) => setstudentDetails(e.target.name, e.target.value)} />
    <Input name="lastName" value={student.lastName} text="Last Name" onChange={(e) => setstudentDetails(e.target.name, e.target.value)} />
    <RadioButton checked={student.gender} onclick={(key, value) => setstudentDetails(key, value)} />
    <Input value={student.userName} name="userName" text="User Name" onChange={(e) => setstudentDetails(e.target.name, e.target.value)} />
    <Input  name="password" text="Password" onChange={(e) => setstudentDetails(e.target.name, e.target.value)} />
    <Input value={student.email} name="email" text="Email" onChange={(e) => setstudentDetails(e.target.name, e.target.value)} />
    <DropdownWrap value={student.city} name="city" title="City" options={cities} onChange={(key, value) => setstudentDetails(key, value)} />
  </div>
}

export default Create;