/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function UseStateExample12() {
    const [userName, setUserName] = useState("");

  return (
    <div>
        <input type="text" placeholder='Enter Your Username' onChange={(e)=> setUserName(e.target.value)} />

        <h1>Hello {userName}</h1>    
    </div>
  )
}
