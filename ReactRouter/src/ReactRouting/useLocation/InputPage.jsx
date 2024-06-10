/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function InputPage() {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleButton = ()=>{
        navigate("/Output" , {state: {name}})
    }
  return (
    <div>
        <input type="text" placeholder='Enter name' onChange={(e)=>{setName(e.target.value)}} />
        <button onClick={handleButton}>Send Record</button>
    </div> 
  )
}
