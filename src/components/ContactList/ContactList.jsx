// ContactList.jsx
import React from 'react';
import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} deleteContact={deleteContact} />
      ))}
    </div>
  );
};
