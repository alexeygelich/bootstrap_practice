import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Button, Container, Modal, Form } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = (props) => {
  const [show, setShow] = useState(false);
  const onClose = () => {
    setShow(false);
  };
  const onOpen = () => {
    setShow(true);
  };

  return (
    <>
      <Navbar className="NavBarWrapper" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contacts">
                <Nav.Link>Contacts</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav>
              <Button variant="primary" className="mr-3" onClick={onOpen}>
                Sign in
              </Button>
              <Button variant="primary" onClick={onOpen}>
                Sign out
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your Name" />
              <Form.Text>Description</Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your Email" />
              <Form.Text>Description</Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your Password" />
              <Form.Text>Description</Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Control type="checkbox" placeholder="I Agree ...." />
              <Form.Text>Description</Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavBar;
