/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function ChildComponent8(props) {
  return (
    <div>
        {props.userData.map((item,i)=>{
            return <div key={i}>
                <h3>{item.username}</h3>
                <h3>{item.subject}</h3>
                <h3>{item.city}</h3>
            </div>
        })}
    </div>
  )
}
