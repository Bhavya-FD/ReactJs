/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

export default function HookExample3() {
    const [data, setData] = useState(0);

    useEffect(()=>{
        console.log("UseEffect called");
    },[])
  return (
    <div>
        <h2>{data}</h2>
        <button onClick={()=>setData(data+1)}>Click here</button>
    </div>
  )
}
