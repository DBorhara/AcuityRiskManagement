import React, { Component } from 'react';
import emailjs from 'emailjs-com';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Form, Button } from 'react-bootstrap';

import './contact.styles.scss';

import Hero from '../../components/heroimage/heroimage.component';

class ContactPage extends Component {
  state = {
    name: '',
    email: '',
    industry: '',
    message: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        'gmail',
        'acuityemailform',
        event.target,
        'user_bwLIaWZ7w6oGADJnXoOvJ'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    this.resetForm();
  };
  resetForm() {
    this.setState({
      name: '',
      email: '',
      industry: '',
      message: '',
    });
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };
  render() {
    return (
      <div>
        <div id="about-titles">
          <h1>Contact Us</h1>
        </div>
        <Hero />
        <br />
        <br />
        <div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                {' '}
                <strong>Email</strong>
              </Form.Label>
              <Form.Control
                name="email"
                type="email"
                value={this.state.email}
                placeholder="name@example.com"
                onChange={this.handleChange.bind(this, 'email')}
              />
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label>
                {' '}
                <strong>Name</strong>
              </Form.Label>
              <Form.Control
                name="name"
                type="text"
                value={this.state.name}
                placeholder="Name"
                onChange={this.handleChange.bind(this, 'name')}
              />
            </Form.Group>
            <Form.Group controlId="formBasicindustry">
              <Form.Label>
                <strong>Industry</strong>
              </Form.Label>
              <Form.Control
                name="industry"
                type="text"
                value={this.state.industry}
                placeholder="Industry"
                onChange={this.handleChange.bind(this, 'industry')}
              />
            </Form.Group>
            <Form.Group controlId="formBasicMessage">
              <Form.Label>
                <strong>Message</strong>
              </Form.Label>
              <Form.Control
                name="message"
                as="textarea"
                rows="7"
                placeholder="Type Message Here"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
            </Form.Group>
            <Form.Group>
              <Button className="my-1" type="submit">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}
export default ContactPage;
