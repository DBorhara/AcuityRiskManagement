import React from 'react';
import './about.styles.scss';

import missionImg from '../../assets/img/missionimg.png';
const AboutPage = () => (
  <div>
    <div id="about-titles">
      <h1>About Us</h1>
    </div>
    <div id="about-title">
      <h2>The Acquity Mission</h2>
    </div>
    <div className='img-content'>
      <img alt='Mission'src={missionImg} />
    </div>
    <div id="about-sub-title">
      <h3>A Modern Consulting Company</h3>
    </div>
    <div className="about-content">
      <p>
        Acquity provides a lens of understanding and customization to your
        company's risk needs
        <br />
        <br />
        <strong>Jaime Barrientos, CEO</strong>
        "Acquity doesn't just manage risk, we provide solutions for your
        business, a peace of mind through the pursuit of excellence"
      </p>
    </div>
    <div className="about-title">
      <h2>Our Story</h2>
    </div>
    <div className="about-title">
      <h2>Our Values</h2>
    </div>
    <div>
      <div className="about-title">
        <h3>Innovation</h3>
      </div>
      <div className="about-content">
        <p>
          Acquity Risk has a proprietary process to accurately address risk and
          deficiencies, to transform risk attitude to positive and proactive
          results
        </p>
      </div>
    </div>
    <div>
      <div className="about-title">
        <h3>Discipline and Perseverance</h3>
      </div>
      <div className="about-content">
        <p>
          The way we use expert knowledge of processes, timing and accurate data
          with stakeholder involvement in mind is what sets us apart.
        </p>
      </div>
    </div>
    <div>
      <div className="about-title">
        <h3>Customization</h3>
      </div>
      <div className="about-content">
        <p>
          Acquity tailors each solution for the business size it is and the
          industry it's in.
        </p>
      </div>
    </div>
  </div>
);

export default AboutPage;
