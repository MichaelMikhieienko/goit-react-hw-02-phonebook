import React from 'react';

export const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};
