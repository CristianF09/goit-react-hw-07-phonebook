import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../store/contactsSlice'; // Corrected path
import Filter from './Filter'; 
import ContactList from './ContactList/ContactList'; // Corrected path
import ContactForm from './ContactForm/ContactForm'; // Corrected path
import styles from './App.module.css'; 

const App = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState(''); 
  const isLoading = useSelector((state) => state.contacts.isLoading); 
  const error = useSelector((state) => state.contacts.error); 
  const contacts = useSelector((state) => state.contacts.items); 

  useEffect(() => {
    dispatch(fetchContacts()); 
  }, [dispatch]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value); 
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className={styles.app}>
      <h1>Phonebook</h1>
      <ContactForm /> 
      <h2>Contacts</h2>
      {isLoading && <p>Loading...</p>} 
      {error && <p>Error fetching contacts: {error}</p>} 
      <Filter filter={filter} onChange={handleFilterChange} />
      <ContactList contacts={getFilteredContacts()} /> 
    </div>
  );
};

export default App;