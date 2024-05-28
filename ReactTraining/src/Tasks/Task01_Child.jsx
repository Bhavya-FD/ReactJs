/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import "../Tasks/Task01.css"

export default function Task01_Child(props) {
  return (
    <div>
      <div className="divCard">
        <div className="cardImg">
          {props.img} <br /><br />
          <h4>{props.name}</h4>
          <h4>{props.sub}</h4>           
          <h4>{props.city}</h4>
          <h4>{props.email}</h4>
          <h4>{props.gender}</h4>
        </div>  
      </div>
    </div>
  )
}
