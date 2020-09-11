import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './MVR.styles.scss';
import axios from 'axios';

class MVRReleaseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      company: '',
      social4: '',
      selectedFile: null,
      confirmed: false,
    };
  }

  fileSelectedHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleConfirm = (event) => {
    if (event.target.value === false) {
      this.setState({ confirmed: true });
    }
    if (event.target.value === true) {
      this.setState({ confirmed: false });
    }
  };

  handleSubmit = async (event) => {
    if (this.state.confirmed) {
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
                  Math.round(
                    (progressEvent.loaded / progressEvent.total) * 100
                  ) +
                  '%'
              );
            },
          }
        );
        //NEED ENDPOINTS
        const response = await axios.post('', fd);
        console.log(response);

        const user = {
          name: this.state.name,
          company: this.state.company,
          social4: this.state.social4,
        };
        const response2 = axios.post('', { user });
        console.log('response2', response2);
      } catch (error) {
        console.error(error);
      }
    } else {
      window.alert('Please check the I Affirm Box to continue');
    }
  };
  render() {
    return (
      <div>
        <div id="about-titles">
          <h1>MVR Submission Form</h1>
        </div>
        <div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicCompany">
              <Form.Label>
                <strong>Company Name</strong>
              </Form.Label>
              <Form.Control
                name="company"
                type="text"
                placeholder="Company Name"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label>
                <strong>Driver Name</strong>
              </Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Driver Name"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicSSNUm">
              <Form.Label>
                <strong>Last 4 of SS Number</strong>
              </Form.Label>
              <Form.Control
                name="social4"
                type="password"
                placeholder="Last 4 of SS"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                <strong>Upload Driver License Image</strong>
              </Form.Label>
              <Form.File
                id="custom-file"
                label="Click Here"
                custom
                onChange={this.fileSelectedHandler}
                ref={(fileInput) => (this.fileInput = fileInput)}
              />
            </Form.Group>
            <br />
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                onClick={this.handleConfirm}
                type="checkbox"
                label="I affirm all the data I am submitting is true and accurate"
              />
            </Form.Group>
            <Form.Group>
              <Button type="submit" className="my-1">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}

export default MVRReleaseForm;

// <div>
//           <input
//             style={{ display: 'none' }}
//             type="file"
//             onChange={this.fileSelectedHandler}
//             ref={(fileInput) => (this.fileInput = fileInput)}
//           />
//           <button onClick={() => this.fileInput.click()}>Attach MVR</button>
//         </div>
