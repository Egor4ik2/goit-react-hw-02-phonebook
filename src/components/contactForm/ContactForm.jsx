import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;

    if (!name || !number) {
      window.alert('Please write something');
      return;
    }

    this.props.addContact({ name, number });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          onChange={this.handleInputChange}
          placeholder="Name"
        />
        <input
          className={styles.input}
          type="text"
          name="number"
          value={number}
          onChange={this.handleInputChange}
          placeholder="Number"
        />
        <button className={styles.button} type="submit">Add Contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
