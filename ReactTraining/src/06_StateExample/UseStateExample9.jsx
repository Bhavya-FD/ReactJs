/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function UseStateExample9() {
    const [fontSize, setFontSize] = useState(20)

  return (
    <div>
        <h1 style={{fontSize:fontSize}}>Hello This is a Heading.</h1>
        <button onClick={()=>setFontSize(fontSize+2)}>Increase FontSize</button>
        <button onClick={()=>setFontSize(fontSize-2)}>Decrease FontSize</button>
    </div>
  )
}
