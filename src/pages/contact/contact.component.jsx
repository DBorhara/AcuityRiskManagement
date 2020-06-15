import React, { Component } from 'react';
import './contact.styles.scss';

import Hero from '../../components/heroimage/heroimage.component';

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      industry: '',
      message: '',
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      disabled: true,
    });
  };

  render() {
    return (
      <div>
        <Hero />
        <h1>Contact Us</h1>
        <form onSubmit={this.handleSubmit}>
          Name:
          <input name="name" type="text" onChange={this.handleChange} />
          Email:
          <input name="email" type="email" onChange={this.handleChange} />
          Industry:
          <input name="industry" type="text" onChange={this.handleChange} />
          Message:
          <textarea name="message" onChange={this.handleChange} />
          <button
            className="button"
            name="submit"
            type="submit"
            onSubmit={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ContactPage;
