import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm'; 
import ContactList from './ContactList/ContactList';
import Filter from './Filter';
import styles from './App.module.css';

const App = () => {
    const [filter, setFilter] = useState('');
    const contacts = useSelector((state) => state.contacts.items);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <div className={styles.app}>
            <h1>Phonebook</h1>
            <ContactForm />
            <Filter filter={filter} onChange={handleFilterChange} />
            <h2>Contacts</h2>
            <ContactList contacts={contacts} filter={filter} />
        </div>
    );
};

export default App;