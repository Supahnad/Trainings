import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./MainNav.css";

function MainNav() {
  return (
    <div>
      <Navbar className="p-4" variant="dark" bg="dark" expand="lg" fixed="top">
        <Container className="fs-4" >
          <Navbar.Brand className="fs-3" href="#home">Sample-Website</Navbar.Brand>
          <Form className="d-none d-lg-flex d-xl-flex ms-5">
            <Form.Control
              type="search"
              placeholder="Search"
              className="p-2 me-2 search-bar"
              aria-label="Search"

            />
            <Button variant="outline-light">Search</Button>
          </Form>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Browse</Nav.Link>
              <Nav.Link href="#link">Details</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MainNav;
