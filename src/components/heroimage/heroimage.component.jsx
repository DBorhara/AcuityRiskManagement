import React from 'react';
import { Redirect } from 'react-router-dom';
import './heroimage.styles.scss';

import heroimage from '../../assets/img/heroimage.jpg';

const Hero = () => (
  <div className="container">
    <img className="hero-image" src={heroimage} alt="Hero" />
    <div className="hero-text">
      <h1>Acuity Risk Consultants</h1>
      <p>Protect your Livelihood</p>
      <button className="button" onClick={<Redirect push to="/services" />}>
        Services
      </button>
    </div>
  </div>
);
export default Hero;
