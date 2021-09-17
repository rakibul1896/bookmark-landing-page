import React from "react";
import logo from "../../images/logo-bookmark.svg";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className='p-sticky top-0 bg-white navBar z-100'>
      <Navbar collapseOnSelect expand="md">
        <Container className='mt-3'>
          <Navbar.Brand href="#home">
            <img src={logo} alt="bookmark logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ border: "none"}}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto mt-5 mt-md-0 d-flex flex-column flex-md-row align-items-center">
              <Nav.Link href="#features" className='text-dark text-secondary-hover py-4px px-24px'>FEATURE</Nav.Link>
              <Nav.Link href="#pricing" className='text-dark text-secondary-hover py-4px px-24px'>PRICING</Nav.Link>
              <Nav.Link href="#contact" className='text-dark text-secondary-hover py-4px px-24px'>CONTACT</Nav.Link>
              <Nav.Link href="#login" className='bg-secondary bg-white-hover text-white text-secondary-hover py-4px px-24px border border-secondary rounded-3' style={{padding: 0}}>LOGIN</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
