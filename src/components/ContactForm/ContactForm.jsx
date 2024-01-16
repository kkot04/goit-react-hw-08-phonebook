import { useDispatch, useSelector } from 'react-redux';
import { addContasctThunk } from '../../store/contacts/operations.js';
import { getContacts } from '../../store/contacts/selector.js';

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
    <div onSubmit={createContact}>
      <input
        type="text"
        name="name"
        placeholder="Contact name"
        required/>

      <input
        type="tel"
        name="number"
        placeholder="Phone number"
        required/>

      <button   onSubmit={createContact} type="submit">
        Add contact
      </button>
    </div>
  );
};