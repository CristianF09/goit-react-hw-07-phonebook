import React from 'react';
import ContactForm from './ContactList/ContactForm';
import Filter from './Filter';
import ContactList from './ContactList/ContactList';
import styles from './App.module.css'; 

const App = () => {
    return (
        <div className={styles.app}> 
            <h1>Phonebook</h1>
            <ContactForm />
            <Filter />
            <ContactList />
        </div>
    );
};

export default App;