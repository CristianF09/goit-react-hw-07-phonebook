import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, fetchContacts } from '../../store/contactsSlice'; 
import styles from './ContactForm.module.css'; 

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    dispatch(fetchContacts()); // Fetch contacts on mount
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in your contacts.`);
      return;
    }

    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="name">
        Name
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter contact name"
          required
        />
      </label>
      <label htmlFor="phone">
        Phone
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone number"
          pattern="^[0-9\s()\-+]*$"
          title="Phone number should contain digits, spaces, and optionally +, -, (, )"
          required
        />
      </label>
      <button type="submit" className={styles.submitButton}>Add Contact</button>
    </form>
  );
};

export default ContactForm;