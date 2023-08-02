import React from 'react';
import {FaTrash } from 'react-icons/fa'
import './TodoList.css'
import { Button } from 'react-bootstrap';


const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    /* Map through the todos array and render each todo item */
    <ul className='m-0 p-0'>
      {todos.map((todo, index) => (
          <li className='item d-flex justify-content-between p-2 mt-1' key={index}>
          {todo}
          {/* Attach the onDeleteTodo callback to the Delete button */ }
          <Button variant="danger" onClick={() => onDeleteTodo(index)}> <FaTrash /></Button>
          </li>
      ))}
    </ul>
  );
};

export default TodoList;