/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function UseStateExample11() {
    const [bgColor, setBgColor] = useState(0)

    const BgColorArray = ["blue","yellow","purple","white","gray"];
    const RandomColorHandler = ()=>{
        const indexRandom = Math.floor(Math.random()*colorArray.length)
        console.log(indexRandom);
        setBgColor(indexRandom);
    }
    const colorArray = ["aliceBlue","yellow","purple","white","gray"];
    const ColorHandler = ()=>{
        const indexRandom = Math.floor(Math.random()*colorArray.length)
        console.log(indexRandom);
        setBgColor(indexRandom);
    }
  return (
    <div>
        <button style={{height:"150px",background:colorArray[bgColor],color:colorArray[bgColor]}} onClick={RandomColorHandler}>Click Me!</button>
    </div>
  )
}
