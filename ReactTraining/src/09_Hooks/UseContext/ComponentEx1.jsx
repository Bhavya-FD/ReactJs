/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react'
import ComponentEx2 from './ComponentEx2';

export const myContext = createContext("");

export default function ComponentEx1() {
    const [name, setName] = useState("")
    const [subject, setSubject] = useState("")
  return (
    <div>
        <input type="text" placeholder='Enter Name' onChange={(e)=>{setName(e.target.value)}} />
        <input type="text" placeholder='Enter Subject' onChange={(e)=>{setSubject(e.target.value)}} />
        
        <myContext.Provider value={{name,subject}}>
            <ComponentEx2/>
        </myContext.Provider>

    </div>


  )
}
