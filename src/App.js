import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [filterText, setFilterText] = useState('');

  // Cargar datos del localStorage al iniciar la aplicación
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  const handleAddTodo = (text) => {
    const newTodos = [...todos, text];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const handleEditTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index] = newText;
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const handleFilterChange = (text) => {
    setFilterText(text);
  };

  const filteredTodos = todos.filter(todo =>
    todo.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Filter filterText={filterText} onFilterChange={handleFilterChange} />
      <TodoForm onAdd={handleAddTodo} />
      <TodoList todos={filteredTodos} onDelete={handleDeleteTodo} onEdit={handleEditTodo} />
    </div>
  );
}

export default App;
