import './App.css'
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import { FaPlus } from "react-icons/fa";
import { Button } from 'react-bootstrap';

const App = () => {
  // State to hold the todos array and input value
  const [todos, setTodos] = useState([]);
  console.log(todos);
  const [inputValue, setInputValue] = useState('');

  // Handle input change when typing in the text box
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle adding a new todo to the list
  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  // Handle deleting an individual todo based on its index
  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  // Handle deleting all todos from the list
  const handleDeleteAllTodos = () => {
    setTodos([]);
  };

  // Paragraph displaying the number of todos
  const todoCount = todos.length;

  return (
    <div className='todo__container'>
      <h2>Todo App</h2>
      <div  className='d-flex align-content-center '>
        <input className='me-1 p-1 flex-1' type="text" value={inputValue} onChange={handleInputChange} />
        <Button className="btn-add" onClick={handleAddTodo}> <FaPlus /> </Button>
      </div>
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
      <div className='d-flex justify-content-around align-items-center px-1'>
        <p className='p-0 m-0'>You Have <span className='text-primary'>{todoCount}</span> Pending Task</p>
        <Button className='btn-clear-all mt-3 ms-auto d-block' onClick={handleDeleteAllTodos}>Clear All</Button>
      </div>
    </div>
  );
};

export default App;
