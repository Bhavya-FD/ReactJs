/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function UseStateExample14() {
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");

    const [data, setData] = useState("")
    const handleSubmit = ()=>{
        setData(firstname +" " + lastname)
        firstname("");
        lastname("");
    }
  return (
    <div>
        <input type="text" placeholder='First name here' value={firstname} onChange={(e)=>setFirstname(e.target.value)} /><br /><br />
        <input type="text" placeholder='Last name here' value={lastname} onChange={(e)=>setLastname(e.target.value)} /><br /><br />

        <h1>Hello! {data}</h1>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
