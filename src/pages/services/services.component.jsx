import React from 'react';
import './services.styles.scss';

//Images
import riskabout1 from '../../assets/img/riskabout1.jpg';
import process from '../../assets/img/process.png';

const ServicesPage = () => (
  <div>
    <div id="services-titles">
      <h1>Services</h1>
    </div>
    <br />
    <div id="services-title">
      <h2>What Do We Offer?</h2>
    </div>
    <div className="img-content">
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
    <div id="services-title">
      <h2>How Do We Do It?</h2>
      <h3>Our Simple Process</h3>
    </div>
    <div className="img-content">
      <img alt="How Do We Manage Risk" src={process} />
    </div>
    <div id="services-title">
      <h2>Why Do You Need Risk Management?</h2>
    </div>
    <div className="services-content">
      <ul>
        <li>
          Saving finite resources: time, income, assets, people and property can
          be saved if fewer claims occur
        </li>
        <li>
          Creating a safe and secure environment for staff, visitors, and
          customers
        </li>
        <li>
          Reducing legal liability and increasing the stability of your
          operations
        </li>
        <li>Improving customer satisfaction</li>
        <li>Protecting the environment</li>
        <li> Defining your insurance needs to save on uncessary premiums</li>
      </ul>
    </div>
  </div>
);

export default ServicesPage;
