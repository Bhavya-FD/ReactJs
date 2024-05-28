/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function UseStateExample6() {
    const [boxColor, setBoxColor] = useState("yellow")
  return (
    <div>
        <div style={{height:"200px", width:"200px",background:boxColor}}></div>
        <button style={{color:"purple"}} onClick={()=>setBoxColor("red")}>Red</button>
        <button style={{color:"purple"}} onClick={()=>setBoxColor("purple")}>Purple</button>
        <button style={{color:"blue"}} onClick={()=>setBoxColor("blue")}>Blue</button>
        <button style={{color:"black"}} onClick={()=>setBoxColor("black")}>Black</button>
        <button style={{color:"pink"}} onClick={()=>setBoxColor("pink")}>Pink</button>
    </div>
  )
}
