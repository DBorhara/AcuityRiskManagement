import React from 'react';
import './homepage.styles.scss';

//Components
import Hero from '../../components/Hero_Image/heroimage.component';
//Images
import riskimg1 from '../../assets/img/riskimg1.jpg';
import riskimg2 from '../../assets/img/riskimg2.jpg';
import riskimg3 from '../../assets/img/riskimg3.jpg';
import riskimg4 from '../../assets/img/riskimg4.jpg';

const HomePage = () => (
  <div>
    <div id="about-titles">
      <h1>Acuity Risk Consultants</h1>
    </div>
    <Hero />
    <br />
    <br />
    <div className="homepage-title">
      Risk Management is more important than ever and when done correctly
      provides clients with information to properly grow business and mitigate
      losses.
    </div>
    <div className="container">
      <div className="img-container">
        <img alt="Risk 1" src={riskimg1} />
      </div>
      <div className="list-line-content">
        <div className="text-content">
          Your risk program is not at 100% maximum value. The appropriate
          parties are overextended and do not have the resources to properly
          assess and provide risk control.
        </div>
      </div>
    </div>
    <br />
    <div className="container">
      <div className="img-container">
        <img alt="Risk 2" src={riskimg2} />
      </div>
      <div className="list-line-content">
        <div className="text-content">
          Having insurance is not the same thing. Even the best brokers may
          provide streamlined services and good risk management, however, they
          are still aligned with their own organizational goals, bad accounts
          add to deficiency, and other parties involved in process may be
          lacking technical skill.
        </div>
      </div>
    </div>
    <br />
    <div className="container">
      <div className="img-container">
        <img alt="Risk 3" src={riskimg3} />
      </div>
      <div className="list-line-content">
        <div className="text-content">
          Organizations continuously overestimate their risk program’s
          capabilities:
          <br />
          <ul>
            <li>No business continuity plans </li>
            <li>No emergency response plan</li>
            <li>
              Wasted dollars in insurance coverage when it may not properly
              control risk
            </li>
          </ul>
        </div>
      </div>
    </div>
    <br />
    <div className="container">
      <div className="img-container">
        <img alt="Risk 4" src={riskimg4} />
      </div>
      <div className="list-line-content">
        <div className="text-content">
          Knowledge is power and that knowledge belongs in clients hands, not
          big insurance brokers and insurance companies
        </div>
      </div>
    </div>
    <br />
    <br />
  </div>
);
export default HomePage;
