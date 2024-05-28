/* eslint-disable no-unused-vars */
import React from 'react'
import ChildpropExample3 from './ChildpropExample3'

export default function ParentPropExample3() {
    const handleClick = ()=>{
        alert("Hello Users !")
    }
  return (
    <div>
        {/* <button onClick={handleClick}>Click here-parent Component</button>     */}
        <ChildpropExample3 myfun = {handleClick}/> 
    </div>
  )
}
