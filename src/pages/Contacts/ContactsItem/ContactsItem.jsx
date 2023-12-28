import React from 'react';
import s from './ContactsItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContactsThunk } from 'store/contacts/operations';

export const ContactsItem = ({ name, number, id }) => {
  const dispatch = useDispatch()
  return (
    <li className={s.contactItem}>
      <div>
        <span>{name}: </span>
        <span>{number}</span>
      </div>

      <button
        className={s.deleteBtn}
        type="button"
        onClick={() => dispatch(deleteContactsThunk(id))}
      >
        Delete
      </button>
    </li>
  );
};