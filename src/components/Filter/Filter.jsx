import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../store/contacts/phonebookSlice.js';
// import { InputFilter } from './StyledFilter';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = event => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <TextField
      style={{ width: '100%' }}
      onChange={handleFilter}
      type="text"
      label="Search"
      variant="standard"
      color="warning"
    />
  );
};
