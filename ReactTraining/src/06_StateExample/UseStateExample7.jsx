/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function UseStateExample7() {
    const [bgColor, setBgColor] = useState(0)

    const colorArray = ["blue","yellow","purple","white","gray"];
    const RandomColorHandler = ()=>{
        const indexRandom = Math.floor(Math.random()*colorArray.length)
        console.log(indexRandom);
        setBgColor(indexRandom);
    }
  return (
    <div style={{background:colorArray[bgColor]}}>
        <h1>Hello</h1>
        <button onClick={RandomColorHandler}>Change</button>
    </div>
  )
}
