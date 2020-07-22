import React from 'react';

import { Navbar, Nav, Form, FormControl } from '../BootstrapWrap';
import OutlineButton from '../Button/OutlineButton';
const NavbarWrap = ({ setIsAuthenticated, setCurrentPage }) => {
  return <>
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home" onClick={() => setCurrentPage(1)}>Home</Nav.Link>
        <Nav.Link href="#courses" onClick={() => setCurrentPage(2)}>Courses</Nav.Link>
        <Nav.Link href="#students" onClick={() => setCurrentPage(3)}>Students</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <OutlineButton variant="outline-light" text="Search" />
      </Form>
  
      <Nav.Link href="/" style={{ "color": "white" }} onClick={() => localStorage.clear()  }>Logout</Nav.Link>
    </Navbar>
  </>
}

export default NavbarWrap;