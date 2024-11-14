import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../assets/Navbar.css"; // Custom styles

function CNavbar() {
  return (
    <Navbar expand="md" className="custom-navbar fixed-top">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand">
          <strong> Zack Agba</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-link">
              <strong>Home</strong>
            </Nav.Link>
            <Nav.Link href="#projects" className="nav-link">
              <strong>Projects</strong>
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-link">
              <strong>Contact</strong>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CNavbar;
