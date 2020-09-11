import React from 'react';
import './about.styles.scss';

import missionImg from '../../assets/img/missionimg.png';
const AboutPage = () => (
  <div>
  <div id="about-titles">
  <h1>About Us</h1>
  </div>
  <br/>
    <div id="about-title">
      <h2>The Acquity Mission</h2>
    </div>
    <div className="img-content">
      <img alt="Mission" src={missionImg} />
    </div>
    <div id="about-sub-title">
      <h3>A Modern Consulting Company</h3>
    </div>
    <div className="about-content">
      Acquity provides a lens of understanding and customization to your
      company's risk needs
      <br />
      <br />
    </div>
    <div>
      <div className="about-title">
        <h2>Who are We?</h2>
      </div>
      <div className="about-content">
        A team of industry experts to support your risk management and
        compliance process providing:
        <ul>
          <li>Seamless Integrations</li>
          <li>Accurate Work</li>
          <li>Dedicated Resources</li>
          <li>Unlimited Training and Support</li>
          <li>Peace of Mind</li>
        </ul>
        Acuity believes in rising by lifting our people, businesses, and
        community
      </div>
      <br />
      <div className="about-title">
        <h2>Our Values</h2>
      </div>
      <div>
        <div className="about-title">
          <h3>Innovation</h3>
        </div>
        <div className="about-content">
          Acquity Risk has a proprietary process to accurately address risk and
          deficiencies, to transform risk attitude to positive and proactive
          results
        </div>
      </div>
      <br />
      <div>
        <div className="about-title">
          <h3>Discipline and Perseverance</h3>
        </div>
        <div className="about-content">
          The way we use expert knowledge of processes, timing and accurate data
          with stakeholder involvement in mind is what sets us apart.
        </div>
      </div>
      <br />
      <div>
        <div className="about-title">
          <h3>Customization</h3>
        </div>

        <div className="about-content">
          Acquity tailors each solution for the business size it is and the
          industry it's in.
        </div>
      </div>
      <br />
    </div>
  </div>
);

export default AboutPage;
