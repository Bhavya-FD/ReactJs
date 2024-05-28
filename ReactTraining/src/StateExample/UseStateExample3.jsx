/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function UseStateExample3() {
    const [name, setName] = useState(" ");
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={()=> setName("React Js")}>Change</button>
    </div>
  )
}
