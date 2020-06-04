import React from 'react';
import './heroimage.styles.scss';
import heroimage from '../../assets/img/heroimage.jpg';
import { Redirect } from 'react-router-dom';

const Hero = () => (
  <div className="container">
    <img className="hero-image" src={heroimage} alt="Hero" />
    <div className="hero-text">
      <h1>Acuity Risk Consultants</h1>
      <p>Lorem Ipsum</p>
      <button className="button" onClick={<Redirect push to="/services" />}>
        Services
      </button>
    </div>
  </div>
);
export default Hero;
