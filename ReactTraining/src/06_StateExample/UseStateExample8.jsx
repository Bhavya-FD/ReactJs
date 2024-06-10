/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function UseStateExample8() {
    const [name, setName] = useState("")

    const nameArray = ["Bhavya","Sandhya","Bhargavi","Kruti","Khyati","Jignasha"];
    const RandomNameHandler = ()=>{
        const indexRandom = Math.floor(Math.random()*nameArray.length)
        console.log(indexRandom);
        setName(indexRandom);
    }
  return (
    <div>
        <h1>Hello  {nameArray[name]}! Welcome to ReactJs.</h1>
        <button onClick={RandomNameHandler}>Change</button>
    </div>
  )
}
