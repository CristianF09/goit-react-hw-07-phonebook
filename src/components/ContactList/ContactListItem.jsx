import React from 'react';
import styles from './ContactList.module.css'; 


const ContactListItem = ({ contact, onDelete }) => {
  return (
    <li className={styles.contactItem}>
      {contact.name}: {contact.number}
      <button className={styles.deleteButton} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;