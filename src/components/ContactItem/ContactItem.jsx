// ./ContactItem/ContactItem
import React from 'react';

export const ContactItem = ({ contact }) => {
  return (
    <div>
      {contact.name} - {contact.number}
    </div>
  );
};
