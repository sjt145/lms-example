import React, { useState } from 'react';

import NavbarWrap from '../../components/Navbar/Navbar'
import Dashboard from './Dashboard'
import Student from './Student'
import Course from './Course/Course'

const Home = ({ setIsAuthenticated }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const getPage = () => {
    switch (currentPage) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Course />;
      case 3:
        return <Student />;
      default:
        return <Dashboard />;
    }
  }

  return <>
    <NavbarWrap setIsAuthenticated={setIsAuthenticated} setCurrentPage={setCurrentPage} />
    {
      getPage()
      // props.children
    }
  </>
}

export default Home;