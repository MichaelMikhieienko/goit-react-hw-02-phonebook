// ./ContactList/ContactList
import React from 'react';
import { ContactItem } from '../ContactItem/ContactItem'; // Импортируем ContactItem

export const ContactList = ({ contacts }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

