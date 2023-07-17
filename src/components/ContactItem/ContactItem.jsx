// ContactItem.jsx
import React from 'react';
import PropTypes from 'prop-types';

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

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

