import React, { useState } from 'react';

function TodoItem({ todo, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(editText);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleSave}>Guardar</button>
        </>
      ) : (
        <>
          {todo}
          <button onClick={handleEdit}>Editar</button>
          <button onClick={onDelete}>Eliminar</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
