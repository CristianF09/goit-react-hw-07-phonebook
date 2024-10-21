import React from 'react';
import ContactListItem from './ContactListItem'; 
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <ContactListItem 
          key={contact.id} 
          contact={contact} 
          onDelete={() => onDeleteContact(contact.id)} 
        />
      ))}
    </ul>
  );
};

export default ContactList;