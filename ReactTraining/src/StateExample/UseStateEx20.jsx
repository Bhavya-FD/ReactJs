/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function UseStateEx20() {
    const [myArray, setMyArray] = useState([]);        //Blank array Initialize
    const [fruit, setFruit] = useState("")

    const handleSubmit = ()=>{
        setMyArray([...myArray,fruit]);
        fruit("");
    }
  return (
    <div>
        <input type="text" placeholder='Enter Fruit Name : ' value={fruit} onChange={(e)=>setFruit(e.target.value)} />
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
