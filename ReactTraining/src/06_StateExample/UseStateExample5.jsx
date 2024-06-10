/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function UseStateExample5() {
    const [isVisible, setisVisible] = useState(false);

    const handleEvent = ()=>{
        // if (isVisible) {
        //     setisVisible(true);
        // } else {
        //     setisVisible(false)
        // }
                    // OR
        // setisVisible(!isVisible)
    }
  return (
    <div>
        {
            isVisible ? <h1>This is Visible</h1>  : <h2>H1 is Invisible</h2>
        }
        <button onClick={()=>{setisVisible(!isVisible)}}>Change</button>
    </div>
  )
}
