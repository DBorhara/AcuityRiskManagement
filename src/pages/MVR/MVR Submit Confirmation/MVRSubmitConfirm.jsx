import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './MVRSubmitConfirm.styles.scss';
import axios from 'axios';

class MVRSubmitConfirm extends Component {
  state = {
    confirmed: false,
    selectedFile: null,
  };

  handleConfirm = () => {
    this.setState({
      confirmed: !this.state.confirmed,
    });
    console.log(this.state.confirmed);
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Clicked');
    const { name, company, social4, selectedFile } = this.props.location.state;
    if (this.state.confirmed) {
      try {
        console.log('Clicked2');
        const fd = new FormData();
        fd.append('image', selectedFile, selectedFile.name, {
          onUploadProgress: (progressEvent) => {
            console.log(
              'Upload Progress:' +
                Math.round((progressEvent.loaded / progressEvent.total) * 100) +
                '%'
            );
          },
        });
        //NEED ENDPOINTS
        const response = await axios.post('', fd);
        console.log(response);
        const user = {
          name: name,
          company: company,
          social4: social4,
        };
        const response2 = axios.post('', { user });
        console.log('response2', response2);
      } catch (error) {
        console.error(error);
      }
    } else {
      window.alert(
        'Please check the "I Affirm" Box to continue with submission'
      );
    }
  };

  render() {
    const { company } = this.props.location.state;
    return (
      <div>
        <div className="title-confirm-text">
          Please Read Below Before Submitting
        </div>
        <div className="confirm-text">
          As a driver of a {company}, I understand that it is my responsibility
          to operate the vehicle in a safe manner and to drive defensively to
          prevent injuries and property damage. I also understand that {company}{' '}
          will periodically review my Motor Vehicle Record to determine
          continued eligibility to drive a company vehicle or a personal vehicle
          on company business. In accordance with the Fair Credit Reporting Act
          and the Federal Drivers Privacy Protection Act, as well as any State
          specific regulations that may be applicable, I have been informed that
          a Motor Vehicle Record will be (annually) obtained on me for initial
          and continued employment purposes. I agree that {company} has the
          right, at any time, to perform inspections of both the inside and
          outside of the vehicle provided to me by {company}. I acknowledge the
          receipt of the above disclosure and authorize {company} or its
          designated agent to obtain a Motor Vehicle Record report. The
          authorization is valid as long as I am an Employee or Employee
          candidate and may only be rescinded in writing, in accordance to
          referenced public laws.
        </div>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            onClick={this.handleConfirm}
            type="checkbox"
            label="I affirm all the data I am submitting is true and accurate"
          />
        </Form.Group>
        <Form.Group>
          <form onSubmit={this.handleSubmit}>
            <Button type="submit" className="my-1">
              Submit
            </Button>
          </form>
        </Form.Group>
      </div>
    );
  }
}

export default MVRSubmitConfirm;
