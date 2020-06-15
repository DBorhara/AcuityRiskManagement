import React from 'react';
import './homepage.styles.scss';

import Hero from '../../components/heroimage/heroimage.component';


const HomePage = () => (
  <div>
    <Hero />
    <br />
    <br />
    <h3>
      Risk Management is more important than ever and when done correctly
      provides clients with information to properly grow business and mitigate
      losses.
    </h3>

    <ul className="homepage-content">
      <li>
        Your risk program is not at 100% maximum value. The appropriate parties
        are overextended and do not have the resources to properly assess and
        provide risk control.
      </li>
      <li>
        Having insurance is not the same thing. Best of brokers may provide
        streamlined services and good risk management however, they are still
        aligned with own organizational goals, bad accounts add to deficiency,
        other parties involved in process may be lacking technical skill.
      </li>
      <li>
        Organizations continuously overestimate their risk program’s
        capabilities:
      </li>
      <ul>
        <li>No business continuity plans No emergency response plan</li>
        <li>
          Wasted dollars in insurance coverage when it may not properly control
          risk
        </li>
        <li>
          Knowledge is power and that knowledge belongs in clients hands not big
          insurance brokers and nnsurance companies
        </li>
      </ul>
    </ul>
  </div>
);
export default HomePage;
