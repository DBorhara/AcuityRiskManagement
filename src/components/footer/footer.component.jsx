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
      <p>123 ABC Street</p>
      <p>Sesame Street, NY, 11111, USA</p>
    </div>
  </div>
);

export default footer;
