import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types'; 
import styles from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  // Using useSelector to get contacts from the Redux store
  const contacts = useSelector((state) => state.contacts.items) || [];

  // Filter contacts based on the search input
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.filter}>
      <label>
        Find contacts by name:
        <input type="text" value={filter} onChange={onChange} />
      </label>
      {/* Display filtered contacts */}
      {filteredContacts.length > 0 ? (
        <ul>
          {filteredContacts.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      ) : (
        <p>No contacts found</p> // Message when no contacts match the filter
      )}
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;