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
    <div className="right-container">
      <p>57 Grand Street</p>
      <p>Massapequa, NY 11758</p>
    </div>
  </div>
);

export default footer;
