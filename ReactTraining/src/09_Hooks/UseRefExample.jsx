/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'

export default function UseRefExample() {
    const inputRef = useRef(null);

    const handleSubmit = ()=>{
        inputRef.current.focus();
    }
  return (
    <div>
        <input type="text" ref={inputRef} placeholder='Enter Name' style={{fontSize:"25px"}} />
        <button onClick={handleSubmit}>Click Here</button>
    </div>
  )
}
