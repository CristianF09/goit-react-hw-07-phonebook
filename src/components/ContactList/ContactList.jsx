import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../../store/contactsSlice'; 
import styles from './ContactList.module.css'; 

const ContactList = () => {
  const dispatch = useDispatch();
  const { items = [], isLoading, error } = useSelector((state) => state.contacts); 

  useEffect(() => {
    dispatch(fetchContacts()); 
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteContact(id)); 
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul className={styles.list}>
      {items.map(({ id, name, phone }) => (
        <li key={id} className={styles.listItem}>
          {name}: {phone}
          <button onClick={() => handleDelete(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;