/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function SimpleLocalStorage1() {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [msg, setMsg] = useState("")

    const handleSubmit=()=>{
        localStorage.setItem(name,subject);
        setMsg("Record Successfully Added")
    }
  return (
    <div>
        <input type="text" placeholder='Enter name : ' onChange={(e)=>setName(e?.target?.value)}/>
        <input type="text" placeholder='Enter subject : ' onChange={(e)=>setSubject(e?.target?.value)}/>
        <button onClick={handleSubmit}>Submit</button>
        <p>{msg}</p>
    </div>
  )
}
