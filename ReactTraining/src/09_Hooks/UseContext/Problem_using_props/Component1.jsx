/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Component2 from './Component2'

export default function Component1() {
    const [data,setData] = useState("");
  return (
    <div>
        <h3>1st Component</h3>
        <input type="text" name="Enter Data" onChange={(e)=>setData(e.target.value)}/>

        {/* Calling 2nd Component */}
        <Component2 message = {data} />
    </div>
  )
}
