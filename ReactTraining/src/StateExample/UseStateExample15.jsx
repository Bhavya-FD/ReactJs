/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function UseStateExample15() {
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")

    const [data, setData] = useState("")
  return (
    <div>
        <input type="number" onChange={(e)=>setNum1(e.target.value)}/>
        <input type="number" onChange={(e)=>setNum2(e.target.value)}/>

        <h1>{data}</h1>
        <button onClick={()=>{setData(parseInt(num1) + parseInt(num2))}}>Add</button>
        <button onClick={()=>{setData(num1 - num2)}}>Subtract</button>
        <button onClick={()=>{setData(num1 * num2)}}>Multiply</button>
        <button onClick={()=>{setData(num1 / num2)}}>Divide</button>
    </div>
  )
}
