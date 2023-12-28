import { useDispatch, useSelector } from 'react-redux';
import { addContasctThunk } from '../../store/contacts/operations.js';
import { getContacts } from '../../store/contacts/selector.js';
import { Button, TextField } from '@mui/material';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const createContact = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    if (contacts.some(contact => contact.name === name)) {
      alert(`Contact with the name ${name} already exists!`);
      return;
    }

    dispatch(addContasctThunk({ name, number }));
    event.target.reset();
  };

  return (
    <div autoComplete="off" onSubmit={createContact}>
      <TextField
        type="text"
        name="name"
        label="Contact name"
        variant="standard"
        color="warning"
        required
      />

      <TextField
        type="tel"
        name="number"
        label="Phone number"
        variant="standard"
        color="warning"
        required
      />

      <Button type="submit" variant="contained">
        Add contact
      </Button>
    </div>
  );
};