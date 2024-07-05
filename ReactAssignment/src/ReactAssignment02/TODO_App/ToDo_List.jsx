/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import TODO_App from './TODO_App';
import '../TODO_App/ToDoApp.css'

export default function ToDo_List() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if (inputValue.trim() !== '') {
          const newTodo = {
            text: inputValue,
            isCompleted: false,
          };
          setTodos([...todos, newTodo]);
          setInputValue('');
        }
      };
    
      const completeTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
      };

      const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };
    
      const updateTodo = (index, newText) => {
        const newTodos = [...todos];
        newTodos[index].text = newText;
        setTodos(newTodos);
      };
    
      return (
        <div className="TodoAppContainer">
            <div className="todoApp">
                <h1>Grocery Shopping</h1>
            <div className="todo-list">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add Something to your list..."
            />
            <button onClick={addTodo}>Add</button>
        
            </div>
            {todos.map((todo, index) => (
                <TODO_App
                key={index}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
                />
            ))}
            </div>
        </div>
      );
}
