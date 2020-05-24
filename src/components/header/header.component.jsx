import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

import logo from '../../assets/img/logo.png';

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img src={logo} height="100" alt="Logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/">
        Home
      </Link>
      <Link className="option" to="/services">
        Services
      </Link>
      <Link className="option" to="/about">
        About Us
      </Link>
      <Link className="option" to="/contact">
        Contact Us
      </Link>
    </div>
  </div>
);

export default Header;
