import React, { useState, useRef } from 'react';

import { Input, DropdownWrap } from '../../../components';

const Create = () => {
  const [categoryId, setCategoryId] = useState(0);
  const [course, setCourse] = useState({});

  const categories = [
    { id: 1, name: 'FrontEnd' },
    { id: 2, name: 'BackEnd' },
    { id: 3, name: 'Database' }
  ]

  const subCategories = [
    { id: 1, categoryId: 1, name: 'React' },
    { id: 2, categoryId: 1, name: 'Angular' },
    { id: 3, categoryId: 2, name: '.Net' },
    { id: 4, categoryId: 2, name: 'Java' },
    { id: 5, categoryId: 3, name: 'SQL Server' }
  ]

  const setSelectedValue = (value) => {
    setCategoryId(value);
  }

  const setCourseObject = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setCourse({ ...course, [key]: value });
  }

  return <div className="createCourse">
    <Input name="courseName" text="Course Name" autoFocus={true} onChange={(e) => setCourseObject(e)} />
    <DropdownWrap title="Category" options={categories} setSelectedValue={setSelectedValue} />
    <DropdownWrap title="Sub Category" options={subCategories.filter(subCategory => subCategory.categoryId === categoryId)} />
    <Input name="fee" text="Fees" onChange={(e) => setCourseObject(e)} />
  </div>
}

export default Create;