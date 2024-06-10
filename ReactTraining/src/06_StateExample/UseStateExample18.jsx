/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function UseStateExample18() {
    const [year, setYear] = useState(0);
  return (
    <div>
        <input type="number" placeholder='Enter No. of Years : ' onChange={(e)=>setYear(e.target.value)}/> <br /><br />
        <span>No. of Months:</span><input type="number" value={year*12} disabled/> <br /><br />
        <span>No. of Days:</span><input type="number" value={year*365} disabled/> <br />
    </div>
  )
}
