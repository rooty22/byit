import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

const MyNavTow = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

          <Nav.Link href="/">خدمة التحاليل المخبرية</Nav.Link>
          <Nav.Link href="/">خدمات التمريض</Nav.Link>
          <Nav.Link href="/">العلاج الطبيعي</Nav.Link>
          <Nav.Link href="/">مقدمي الرعاية الصحية المنزلية</Nav.Link>
          <Nav.Link href="/">زيارة الطبيب</Nav.Link>
          <Nav.Link href="/">استشارات طبيه عن بعد</Nav.Link>
          <Nav.Link href="/">الاشعة</Nav.Link>
          <Nav.Link href="/">التحاليل الجينية</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavTow
