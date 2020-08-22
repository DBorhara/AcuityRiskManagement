import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = () => (
  <div className="topnav">
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
