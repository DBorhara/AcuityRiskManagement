import React from 'react';
import { Link } from 'react-router-dom';
import './heroimage.styles.scss';

import heroimage from '../../assets/img/heroimage.jpg';

const Hero = () => (
  <div>
    <img className="hero-image" src={heroimage} alt="Hero" />
    <div className="hero-text">
      <h3>Protect your Livelihood</h3>
      <div className="hero-buttons">
        <Link to="/services">
          <button className="button" type="button">
            Services
          </button>
        </Link>
        <Link to="/about">
          <button className="button" type="button">
            About
          </button>
        </Link>
        <Link to="/contact">
          <button className="button" type="button">
            Contact
          </button>
        </Link>
      </div>
    </div>
  </div>
);
export default Hero;
