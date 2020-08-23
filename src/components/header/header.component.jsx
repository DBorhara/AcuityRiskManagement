import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import logo from '../../assets/img/logo.jpeg';

const Header = () => (
  <div className="topnav">
    <div className="topnav-img">
      <img src={logo} alt="logo" />
    </div>
    <div className="topnav-seperator"></div>

    <Link className="topnav-link" to="/">
      Home
    </Link>
    <Link className="topnav-link" to="/services">
      Services
    </Link>
    <Link className="topnav-link" to="/about">
      About Us
    </Link>
    <Link className="topnav-link" to="/contact">
      Contact Us
    </Link>
  </div>
);

export default Header;
