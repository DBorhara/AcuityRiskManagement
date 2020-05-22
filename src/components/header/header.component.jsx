import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/img/logo.jpeg';

const Header = () => (
  <div className="header">
    <Link classname="logo-container" to="/">
      <Logo classname="logo" />
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
