/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function Increment_Decrement() {
    const [count, setCount] = useState(0)

    return (
      <div style={{border:'2px solid black',padding:'10px',fontSize:'25px',textAlign:'center'}}>
          <h1>This is an Example of useState with Increament and Decreament</h1>
          <span style={{fontSize: "25px" ,margin : "0px 20px"}}>Counter {count}</span> <br /> <br />
          <button style={{margin:"10px 20px",}} onClick={()=>{setCount(count-1)}}>Decrement</button>
          <button onClick={()=>{setCount(count+1)}}>Increament</button> <br />
          <button onClick={()=>{setCount(0)}}>Reset</button>
      </div>
    )
}
