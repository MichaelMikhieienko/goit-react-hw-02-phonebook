// ContactItem.jsx
import React from 'react';

export const ContactItem = ({ contact, deleteContact }) => {
  const handleDelete = () => {
    deleteContact(contact.id);
  };

  return (
    <div>
      {contact.name} - {contact.number}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
