import React, { Component } from 'react';
import './MVR.styles.scss';
import axios from 'axios';

class MVRReleaseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      comapny: '',
      email: '',
      selectedFile: null,
    };
  }

  fileSelectedHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  submitHandler = async (event) => {
    try {
      const fd = new FormData();
      fd.append(
        'image',
        this.state.selectedFile,
        this.state.selectedFile.name,
        {
          onUploadProgress: (progressEvent) => {
            console.log(
              'Upload Progress:' +
                Math.round((progressEvent.loaded / progressEvent.total) * 100) +
                '%'
            );
          },
        }
      );
      const response = await axios.post('', fd);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    return (
      <div>
        <div id="about-titles">
          <h1>MVR Submission Form</h1>
        </div>
        <div>
          <input
            style={{ display: 'none' }}
            type="file"
            onChange={this.fileSelectedHandler}
            ref={(fileInput) => (this.fileInput = fileInput)}
          />
          <button onClick={() => this.fileInput.click()}>Attach MVR</button>
        </div>
      </div>
    );
  }
}

export default MVRReleaseForm;
