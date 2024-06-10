/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useEffect } from 'react';


export default function HookExample6_task() {
    // CSS
    const myStyle = {
        flexCard:{
            display:"flex", 
            flexWrap:"wrap", 
            gap:"40px"
        },
        myCard:{
            background:"linear-gradient(lightBlue,pink)",
            border:"5px inset black", 
            width:"300px", 
            padding:"10px"
        },
        image:{
            width:"100%", 
            height:"300px"
        }
    }

    const [data,setData] = useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch("https://fakestoreapi.com/products");
            const result = await response.json();
            setData(result);
        }

        fetchData();
    },[data])
  return (
    <div>
         {/* style={myStyle.myCard} */}
        {data
        ?<div style={myStyle.flexCard}>
            {data.map((item, index)=>{
                return <div key={index} style={myStyle.myCard}>
                    <h1>{item.category}</h1>
                    <img src={item.image} alt="" style={myStyle.image} />
                    <h2>{item.title}</h2>
                    <h4>{item.description}</h4>
                    <h2>$ {item.price}</h2>
                </div>
            })}
        </div>
            : <p>.....Loading</p>
        }
    </div>
  )
}
