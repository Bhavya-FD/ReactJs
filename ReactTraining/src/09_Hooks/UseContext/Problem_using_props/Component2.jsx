/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Component3 from './Component3'

export default function Component2(props) {
  return (
    <div>
        <h3>2nd Component</h3>

        {/* Calling 3rd Component */}
        <Component3 message2 = {props.message}/>
    </div>
  )
}
