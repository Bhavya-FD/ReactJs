/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function UseStateExample17() {
    const [month, setMonth] = useState(0);
    const [days, setDays] = useState(0);

  return (
    <div>
        <input type="number" placeholder='Enter no. of months here' onChange={(e)=>setMonth(e.target.value)}/>
        <h2>No. of Days : {month*30}</h2>
        <input type="number" placeholder='Enter no. of days here' onChange={(e)=>setDays(e.target.value)}/>
        <h2>No. of Months : {days/30}</h2>


    </div>
  )
}
