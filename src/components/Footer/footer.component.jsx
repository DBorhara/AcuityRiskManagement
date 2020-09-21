import React from 'react';
import { Link } from 'react-router-dom';

import './footer.styles.scss';

const footer = () => (
  <div className="main-footer">
    <div className="left-container">
      <Link className="option" to="/disclaimer">
        Dislcaimer
      </Link>
    </div>
    <div className="right-container">57 Grand Street, Massapequa, NY 11758</div>
  </div>
);

export default footer;
