/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function UseStateExample10() {
    const [image, setImage] = useState(true)
  return (
    <div>
        <div style={{height:"200px",width:"200px"}}>
        {
            image ? <img style={{width:"100%"}} src="../../Images/BulbOff.jpeg" alt="" />  : <img style={{width:"100%"}} src="../../Images/BulbOn.jpeg" alt="" />
        }
            
            <button onClick={()=>{setImage(!image)}}>Click</button>
        </div>
    </div>
  )
}
