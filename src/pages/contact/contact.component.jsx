import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
        'acquityemailform',
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
          <h1 className="p-heading2">Get in Touch</h1>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup controlId="formBasicEmail">
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="w-25"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="name@example.com"
              />
            </FormGroup>
            <FormGroup controlId="formBasicName">
              <Label className="text-muted">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
            </FormGroup>
            <FormGroup controlId="formBasicindustry">
              <Label className="text-muted">Industry</Label>
              <Input
                type="text"
                name="industry"
                className="text-primary"
                value={this.state.industry}
                onChange={this.handleChange.bind(this, 'industry')}
                placeholder="Industry"
              />
            </FormGroup>
            <FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Message</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
            </FormGroup>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
export default ContactPage;
