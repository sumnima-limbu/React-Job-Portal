import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="m-3">
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
              <Nav.Link href="#" className="mx-3">
                HOME
              </Nav.Link>
              <Nav.Link href="#" className="mx-3">
                FOR CANDIDATES
              </Nav.Link>
              <Nav.Link href="#" className="mx-3">
                FOR EMPLOYEES
              </Nav.Link>
              <Nav.Link href="#" className="mx-3">
                PAGES
              </Nav.Link>
              <Nav.Link href="#" className="mx-3">
                BLOG
              </Nav.Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>

        <ButtonToolbar>
          <Button className="me-2">
            <i className="bi bi-person-fill"></i>Sign up
          </Button>
          <Button>
            <i className="bi bi-lock-fill"></i>Log out
          </Button>
        </ButtonToolbar>
      </Container>
    </Navbar>
  );
};

export default NavBar;
