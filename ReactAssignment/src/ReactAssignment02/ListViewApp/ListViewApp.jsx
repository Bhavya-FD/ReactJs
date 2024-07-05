/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './ListViewApp.css'

export default function ListViewApp() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
    
    const addItem = () => {
        if (inputValue.trim() !== '') {
          setItems([...items, inputValue]);
          setInputValue('');
        }
    };
    return (
        <div className="listApp">
          <h1>List View Example</h1>
          <div className="input-container">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter item..."
            />
            <button onClick={addItem}>Add Item</button>
          </div>
          <ul className="item-list">
            {items.map((item,index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      );
}

