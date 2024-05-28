/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function UseStateEx21() {
    const [myArray, setMyArray] = useState([]);        //Blank array Initialize
    const [name, setName] = useState("")
    const [newArray,setNewArray] = useState([]);

    const handleSubmit = ()=>{
        setMyArray([...myArray,name]);
        name("");
    }
    const handleReverse = ()=>{
        setNewArray([newArray.push(myArray.reverse())])
    }
  return (
    <div>
        <input type="text" placeholder='Enter Fruit Name : ' value={name} onChange={(e)=>setName(e.target.value)} /> <br /><br />
        <button onClick={handleSubmit}>Add</button> 
        <button onClick={handleReverse}>Reverse</button>

        <ul>
            {
                myArray.map((e,i)=>{
                    return <li key={i}>{e}</li>
                })
            }
        </ul>
        <ul>
            {newArray}
            {/* {
                newArray.map((e,i)=>{
                    return <li key={i}>{e}</li>
                })
            } */}
        </ul>
    </div>
  )
}
