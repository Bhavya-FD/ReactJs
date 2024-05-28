/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function UseStateExample13() {
    const [username, setUsername] = useState("");
    const [data, setData] = useState("");
 
    const handleSubmit = ()=>{
        setData(username);
        username("")
    }
  return (
    <div>
        <input type="text" placeholder='Enter Your Username' value={username} onChange={(e)=> setUsername(e.target.value)} />
        <h1>{data}</h1>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
