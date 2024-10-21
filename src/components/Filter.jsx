import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types'; 
import styles from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
    const contacts = useSelector((state) => state.contacts.items) || [];

    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className={styles.filter}>
            <label>
                Find contacts by name:
                <input type="text" value={filter} onChange={onChange} />
            </label>
            
            {filteredContacts.length > 0 ? (
                <ul>
                    {filteredContacts.map(({ id, name }) => (
                        <li key={id}>{name}</li>
                    ))}
                </ul>
            ) : (
                <p>No contacts found</p> 
            )}
        </div>
    );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;