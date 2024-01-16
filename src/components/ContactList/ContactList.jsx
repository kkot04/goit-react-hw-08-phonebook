import React, { useEffect } from 'react';
import { ListItem } from '../ListItem/ListItem.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContasctsThunk } from '../../store/contacts/operations.js';
import {
  getContacts,
  getFilter,
  SelectError,
} from '../../store/contacts/selector.js';
export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const error = useSelector(SelectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContasctsThunk());
  }, [dispatch]);

  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase() || '')
  );

  console.log(contacts);
  return (
    <>
      {filteredContacts.length === 0 ? (
        <alert>No contacts</alert>
      ) : (
        <ul>
          {filteredContacts.map(({ id, name, number }) => (
            <ListItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      )}
            {error && <p>{error}</p>}
    </>
  );
};