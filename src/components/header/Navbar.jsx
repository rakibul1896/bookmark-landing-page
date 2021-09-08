import React from "react";
import logo from "../../images/logo-bookmark.svg";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <div >
      <Navbar collapseOnSelect expand="md" fixed="top">
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
              <Nav.Link href="#features" className='navLink '>FEATURE</Nav.Link>
              <Nav.Link href="#pricing" className='navLink '>PRICING</Nav.Link>
              <Nav.Link href="#contact" className='navLink '>CONTACT</Nav.Link>
              <Nav.Link href="#login" className='navLink  bg-secondary text-white border border-secondary rounded-3' style={{padding: 0}}>LOGIN</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
