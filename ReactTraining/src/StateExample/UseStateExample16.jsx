/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function UseStateExample16() {
    const [num, setNum] = useState(0);
    const [data,setData] = useState(0)

    const findFactorial = ()=>{
      let n1 = 1;
      for (let i = 1; i <= num; i++) {
        n1*=i;
        setData(n1)
      }
    }

  return (
    <div>
        <input type="number" placeholder='Enter number here' onChange={(e)=>setNum(e?.target?.value)}/>             {/* e?.target?.value = it is used so it does not take null value*/}
        <button onClick={findFactorial}>Get Factorial</button>
        <h1>{data}</h1>
    </div>
  )
}
