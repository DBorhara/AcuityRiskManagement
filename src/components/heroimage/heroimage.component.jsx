import React from 'react';
import { Link } from 'react-router-dom';
import './heroimage.styles.scss';

import heroimage from '../../assets/img/heroimage.jpg';

const Hero = () => (
  <div className="container">
    <img className="hero-image" src={heroimage} alt="Hero" />
    <div className="hero-text">
      <p>Protect your Livelihood</p>
      <Link to="/services">
        <button className="button" type="button">
          Services
        </button>
      </Link>
    </div>
  </div>
);
export default Hero;
