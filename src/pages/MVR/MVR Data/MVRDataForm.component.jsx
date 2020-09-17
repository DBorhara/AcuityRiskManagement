import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MVRDataForm.styles.scss';

class MVRDataForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      company: '',
      social4: '',
      selectedFile: null,
    };
  }

  isFormValid = () => {
    const { name, company, social4, selectedFile } = this.state;

    return name && company && social4 && selectedFile;
  };

  fileSelectedHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
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
            <Form.Group>
              {this.isFormValid() ? (
                <Link
                  to={{
                    pathname: '/MVRSubmissionConfirm',
                    state: this.state,
                  }}
                >
                  <Button type="submit" className="my-1">
                    Continue
                  </Button>
                </Link>
              ) : null}
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}

export default MVRDataForm;
