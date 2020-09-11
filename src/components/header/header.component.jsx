import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
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

// const Header = () => (
//   <div className="topnav">
//     <div className="topnav-img">
//       <Link to="/">
//         <img src={logo} alt="logo" />
//       </Link>
//     </div>
//     <div className="topnav-seperator"></div>

//     <Link className="topnav-link" to="/">
//       Home
//     </Link>
//     <Link className="topnav-link" to="/services">
//       Services
//     </Link>
//     <Link className="topnav-link" to="/about">
//       About Us
//     </Link>
//     <Link className="topnav-link" to="/contact">
//       Contact Us
//     </Link>
//   </div>
// );

export default Header;
