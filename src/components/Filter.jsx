import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../store/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input 
      type="text" 
      placeholder="Search contacts" 
      onChange={handleFilterChange} 
    />
  );
};

export default Filter;