import React, { useState, useEffect } from 'react';

import { Input, DropdownWrap } from '../../../components';

const Create = ({ setNewCourse, newCourse }) => {
  console.log('edited course', newCourse)
  const [categoryId, setCategoryId] = useState(newCourse.category || 0);
  const [course, setCourse] = useState(newCourse);

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

  useEffect(() => {
    setNewCourse(course);
  }, [course])

  const setCourseObject = (key, value) => {
    setCourse({ ...course, [key]: value });
  }

  const filterSubCategroy = () => {
    return subCategories.filter(subCategory => subCategory.categoryId === categoryId);
  }

  return <div className="createCourse">
    <Input value={course.courseName} name="courseName" text="Course Name" autoFocus={true} onChange={(e) => setCourseObject(e.target.name, e.target.value)} />
    <DropdownWrap value={course.category} name="category" title="Category" options={categories} setSelectedValue={setSelectedValue} onChange={(key, value) => setCourseObject(key, value)} />
    <DropdownWrap value={course.subCategory} name="subCategory" title="Sub Category" options={filterSubCategroy()} onChange={(key, value) => setCourseObject(key, value)} />
    <Input value={course.fees} name="fees" text="Fees" onChange={(e) => setCourseObject(e.target.name, e.target.value)} />
  </div>
}

export default Create;