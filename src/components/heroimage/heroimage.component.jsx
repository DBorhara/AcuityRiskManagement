import React from 'react';
import './heroimage.styles.scss';
import heroimage from '../../assets/img/heroimage.jpg';

const Hero = () => (
  <div className="container">
    <img className="hero-image" src={heroimage} alt="Hero" />
    <div className="hero-text">
      <h1>Acuity Risk Management</h1>
      <p>Lorem Ipsum</p>
      <button className="button">Contact Us</button>
    </div>
  </div>
);
export default Hero;
