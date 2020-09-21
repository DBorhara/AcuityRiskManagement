import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import './header.styles.scss';

import logo from '../../assets/img/logo.jpeg';

const Header = () => (
  <Navbar sticky="top" variant="light" className="color-nav" expand="lg">
    <Navbar.Brand href="/">
      <img src={logo} alt="logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link className="nav-text" href="/">
          Home
        </Nav.Link>
        <Nav.Link className="nav-text" href="/services">
          Services
        </Nav.Link>
        <NavDropdown title="Resources" id="nav-dropdown">
          <NavDropdown.Item href="/MVRSubmission">
            MVR Submission
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link className="nav-text" href="/about">
          About Us
        </Nav.Link>
        <Nav.Link className="nav-text" href="/contact">
          Contact Us
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
