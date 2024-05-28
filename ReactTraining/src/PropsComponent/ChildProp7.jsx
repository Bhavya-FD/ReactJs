/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function ChildProp7(props) {
  return (
    <div>
        {props.product.map((item,i)=>{
            return <div key={i}>
                <h3>{item.id}</h3>
                <h3>{item.name}</h3>
                <h3>{item.subject}</h3>
            </div>
        })}
    </div>
  )
}
