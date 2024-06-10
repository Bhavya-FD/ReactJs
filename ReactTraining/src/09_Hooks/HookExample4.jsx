/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

export default function HookExample4() {
    const [data, setData] = useState([])

    useEffect(()=>{
        
        const fetchData = async()=>{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            // try {
                // if (!response.ok) {
                    // throw new Error("Failed to Fetch Data !")
                // } else {
                    const result = await response.json();
                    setData(result);
                // }
            // } catch (error) {
            //     console.error("Error Fetching Data !", error)
            // }
        }
        fetchData();
    },[])

    return (
    <div>
        {data 
            // ?data
            ? data.map((e,i)=>{
                return <h1 key={i}>{e.title}</h1>
            })
            : <p>....Loading</p>
        }
    </div>
  )
}
