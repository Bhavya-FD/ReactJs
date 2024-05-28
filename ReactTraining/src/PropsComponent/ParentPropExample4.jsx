/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ChildPropExample4 from './ChildPropExample4';

export default function ParentPropExample4() {
    const [islogin, setisLogin] = useState(false);
    const [msg,setMsg] = useState("My React Js")

    const handleClick = ()=>{
        console.log("clicked");
        setisLogin(!islogin)
    }
  return (
    <div>
        <button onClick={handleClick}>Click here</button>
        {
            islogin && <ChildPropExample4 message={msg}/>
        }
    </div>
  )
}
