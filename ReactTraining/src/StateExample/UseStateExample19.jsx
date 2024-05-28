/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function UseStateExample19() {
    const [myArray, setMyArray] = useState([]);         //Blank array Initialize
    const [subject, setSubject] = useState("");

    const handleSubmit = ()=>{
        setMyArray([...myArray,subject]);
    }
  return (
    <div>
        <input type="text" placeholder='Enter Subject' onChange={(e)=>setSubject(e.target.value)} />

        <button onClick={handleSubmit}>Add</button>

        {
            myArray.map((e,i)=>{
                return <h3 key={i}>{e}</h3>
            })
        }
    </div>
  )
}



