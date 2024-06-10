/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

export default function UseRefExample2() {
    const [count, setCount] = useState(0);

    const prevCount = useRef();

    useEffect(() => {
        prevCount.current = count;
    }, [count])
  return (
    <div>
        <p>Current Value : </p>
        <button onClick={()=>setCount(count+1)}>Click here</button>
    </div>
  )
}
