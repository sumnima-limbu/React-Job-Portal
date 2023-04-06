import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="m-3">
      <Container>
        <Link to="/" className="navbar-logo mx-3">
          <Navbar.Brand>JOBS2RIDE</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "200px" }}
            navbarScroll
          >
            <Nav className="nav-links">
              <Link to="/">
                <Nav.Link className="mx-3">HOME</Nav.Link>
              </Link>
              <Link to="/">
                <Nav.Link className="mx-3">FOR CANDIDATES</Nav.Link>
              </Link>
              <Link to="/">
                <Nav.Link className="mx-3">FOR EMPLOYEES</Nav.Link>
              </Link>
              <Link to="/">
                <Nav.Link className="mx-3">PAGES</Nav.Link>
              </Link>
              <Link to="/">
                <Nav.Link className="mx-3">BLOG</Nav.Link>
              </Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>

        <ButtonToolbar>
          <Button className="me-2">
            <i class="bi bi-person-fill"></i>Sign up
          </Button>
          <Button>
            <i class="bi bi-lock-fill"></i>Log out
          </Button>
        </ButtonToolbar>
      </Container>
    </Navbar>
  );
};

export default NavBar;
