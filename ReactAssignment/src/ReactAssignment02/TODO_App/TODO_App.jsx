/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import '../TODO_App/ToDoApp.css'

export default function TODO_App({todo, index, completeTodo, removeTodo, updateTodo }) {
    const [editable, setEditable] = useState(false);
    const [text, setText] = useState(todo.text);

    const handleInputChange = (e) => {
        setText(e.target.value);
      };
    
      const handleEdit = () => {
        setEditable(true);
      };
    
      const handleUpdate = () => {
        updateTodo(index, text);
        setEditable(false);
      };
      return (
        <div className="todo" style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
          {editable ? (
            <input type="text" value={text} onChange={handleInputChange} />
          ) : (
            <div>{todo.text}</div>
          )}
          <div>
            <button onClick={() => completeTodo(index)}>Complete</button>
            {editable ? (
              <button onClick={handleUpdate}>Update</button>
            ) : (
              <button onClick={handleEdit}>Edit</button>
            )}
            <button onClick={() => removeTodo(index)}>Delete</button>
          </div>
        </div>
      );
}

