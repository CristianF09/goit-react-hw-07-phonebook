import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  const contacts = useSelector((state) => state.contacts.items);
  
  // Implement filtering logic
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.filter}>
      <label>
        Find contacts by name:
        <input type="text" value={filter} onChange={onChange} />
      </label>
      <ul>
        {filteredContacts.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;