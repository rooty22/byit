import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" className='active'>الرئيسية</Nav.Link>

          <NavDropdown title="خدماتنا المنزلية" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/1">خدمة 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/2">خدمة 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3">خدمة 3</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="/single">العروض</Nav.Link>
          <Nav.Link href="/blogs">المقالات</Nav.Link>
          <Nav.Link href="/contact">تواصل معنا</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar
