/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react';
import '../CounterApp/CounterApp.css'

export default function CounterApp() {
    const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Counter App</h1>
        <div className="counter">
          <button onClick={decrement}>-</button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
        </div>
      </header>
    </div>
  );
}



  

  

