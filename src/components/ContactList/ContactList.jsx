import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../store/contactsSlice'; 
import styles from './ContactList.module.css'; 

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id)); 
  };

  if (contacts.length === 0) {
    return <p>No contacts found.</p>;
  }

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, phone }) => (
        <li key={id} className={styles.listItem}>
          {name}: {phone}
          <button onClick={() => handleDelete(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;