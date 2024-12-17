import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="hd fixed-top mb-5 bg-light">
        <Container>
          <Navbar.Brand href="#home">PORTFOLIO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link className="me-4" href="#home">Home</Nav.Link>
              <Nav.Link className="me-4" href="#about">About</Nav.Link>
              <Nav.Link className="me-4" href="#services">Service</Nav.Link>
              <Nav.Link className="me-4" href="#skills">Skills</Nav.Link>
              <Nav.Link className="me-4" href="#projects">Projects</Nav.Link>
              <Nav.Link className="me-4" href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
