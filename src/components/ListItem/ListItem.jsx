import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContasctThunk } from 'store/contacts/operations';

export const ListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <div>
        <b>{name}: </b>
        <i>{number}</i>
      </div>

      <button
        type="button"
        onClick={() => dispatch(deleteContasctThunk(id))}
      >
      </button>
    </li>
  );
};
