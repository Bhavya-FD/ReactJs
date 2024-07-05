/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function Element_on_Mouse_Move() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    <div
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: '150px',
        height: '150px',
        border:'20px solid blue',
        backgroundColor: 'lightBlue',
        textAlign:'center',
        borderRadius:'50%',
        cursor: 'pointer',
      }}
      onMouseOver={handleMouseMove}
    >
    </div>
  );
}
