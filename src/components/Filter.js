import React from 'react';

function Filter({ filterText, onFilterChange }) {
  return (
    <input
      type="text"
      placeholder="Buscar tareas"
      value={filterText}
      onChange={(e) => onFilterChange(e.target.value)}
    />
  );
}

export default Filter;
