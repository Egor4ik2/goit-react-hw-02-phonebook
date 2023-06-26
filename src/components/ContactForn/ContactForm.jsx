import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number) {
      window.alert('Please write something');
      return;
    }

    addContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form className={styles['contact-form']} onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </label>
      <label>
        Phone:
        <input
          type="text"
          name="number"
          value={number}
          onChange={handleNumberChange}
          required
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
