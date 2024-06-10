/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function ListView_in_React() {
    const [myArray, setMyArray] = useState([]);        //Blank array Initialize
    const [name, setName] = useState("")

    const handleSubmit = ()=>{
        setMyArray([...myArray,name]);
        setName("");
    }
  return (
    <div>
        <input type="text" placeholder='Enter Fruit Name : ' value={name} onChange={(e)=>setName(e.target.value)} /> <br /><br />
        <button onClick={handleSubmit}>Add</button> 

        <ul>
            {
                myArray.map((e,i)=>{
                    return <li key={i}>{e}</li>
                })
            }
        </ul>
    </div>
  )
}
