import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = (props) => (
  <Navbar className="NavBarWrapper" collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>LOGO</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about">About</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/contacts">Contacts</Link>
          </Nav.Link>
        </Nav>
        <Nav>
          <Button variant="primary" className="mr-3">
            Sign in
          </Button>
          <Button variant="primary">Sign out</Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;
