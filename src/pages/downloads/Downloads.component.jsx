import React from 'react';
import './Downloads.styles.scss';

import MVRReleaseFormPDF from '../../assets/files/MVR Release Form.pdf';

const Downloads = () => (
  <div>
    <div id="about-titles">
      <h1>Downloads</h1>
    </div>
    <div className="download-links">
      <div classname="individual-link">
        <h2>
          <a href={MVRReleaseFormPDF}>MVR Release Form</a>
        </h2>
      </div>
    </div>
  </div>
);

export default Downloads;
