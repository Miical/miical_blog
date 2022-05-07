import React from "react";
import { Link } from "@reach/router";

import "./NavBar.css";
import { Container, Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

/**
 * The navigation bar at the top of pages.
 */
const NavBar = ({pathname}) => {
  return (
    // <nav className="NavBar-container">
    //   <div className="NavBar-title">Miical</div>
    //   <Nav.Link to="/" className="NavBar-link" active={true} >Home</Nav.Link>
    // </nav>
    <Navbar bg="light" expand="lg">
      <Container className="navbar-container">
        {/* <Navbar.Brand>
          <img
            src={require("../../public/img/profile.jpg").default}
            width="15"
            height="15"
            className="d-inline-block align-top"
            alt="profile"
          />
        </Navbar.Brand> */}
        <Navbar.Brand>Miical</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" active={pathname==="/"}>Home</Nav.Link>
            <Nav.Link href="/articlelist/test" active={pathname==="/articlelist/test"}>Article List</Nav.Link>
            <Nav.Link href="/articlelist/test" active={pathname==="/articlelist/tes"}>Upload Article</Nav.Link>
            <Nav.Link href="/articlelist/test" active={pathname==="/articlelist/tes"}>Article Management</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
