import React from 'react';
import './services.styles.scss';

import riskabout1 from '../../assets/img/riskabout1.jpg';

const ServicesPage = () => (
  <div>
    <div id="services-titles">
      <h1>Services</h1>
    </div>
    <div id="services-title">
      <h2>What Do We Offer?</h2>
    </div>
    <div className='img-content'>
      <img alt="About Risk" src={riskabout1} />
    </div>
    <div className="services-content">
      <h3>Simple to Complex Risk Analysis</h3>
      <ul>
        <li>
          Review of organization's risk exposure (operation, hazard, strategic,
          financial)
        </li>

        <li>
          Insurance summary – review of class codes, accurate rating/premium,
          exclusion review
        </li>
        <li> Lease agreement/Vendor agreement</li>
      </ul>
      <ul>
        <li>Risk Management/Consulting</li>
        <li>Insurance Coverage Benchmarking/Full Program Servicing</li>
        <li>Crisis planning/management</li>
        <li>Emergency Response Planning</li>
        <li>Business Continuity Planning</li>
      </ul>
    </div>
  </div>
);

export default ServicesPage;
