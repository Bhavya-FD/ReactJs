/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function UseStateExample4() {
    const [bgColor, setbgColor] = useState("white")
  return (
    <div style = {{background : bgColor}}>
        <h1>Welcome to New Page</h1>
        <button onClick={()=> setbgColor("purple")}>Change Color</button>
    </div>
  )
}
