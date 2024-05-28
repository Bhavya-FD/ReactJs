/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'

export default function UseRefExample3() {
    const name = useRef("");
    const email = useRef("")

    const handleSubmit = ()=>{
        alert(`Confirm Name & Email :${name.current.value} & ${email.current.value} `);
    }
  return (
    <div>
        <input type="text" ref={name} placeholder='Enter Name' />
        <input type="text" ref={email} placeholder='Enter Email' />
        <button onClick={handleSubmit}>Click Here</button>
    </div>
  )
}
