import React, { useState } from 'react';
import ContactForm from './ContactForn/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import styles from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = (contact) => {
    const isContactExists = contacts.find(
      (c) => c.name.toLowerCase() === contact.name.toLowerCase() || c.number === contact.number
    );

    if (isContactExists) {
      window.alert('Контакт с таким именем или номером уже существует!');
      return;
    }

    const newContact = {
      ...contact,
      id: Math.random().toString(),
    };

    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2 className={styles.title}>Contacts</h2>
      <Filter filter={filter} setFilter={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};


