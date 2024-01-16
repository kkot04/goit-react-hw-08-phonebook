import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContasctThunk } from 'store/contacts/operations';
import s from './ContactsItem.module.css'

export const ListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <div>
        <b>{name}: </b>
        <i>{number}</i>
      </div>

      <button
    className={s.deleteBtn}
        type="button"
        onClick={() => dispatch(deleteContasctThunk(id))}
      >
      </button>
    </li>
  );
};
