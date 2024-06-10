/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function Component3(props) {
  return (
    <div>
        <h3>3rd Component</h3>

        {/* Display data from 1st Component */}
        <p>data from 1st Component : {props.message2}</p>
    </div>
  )
}
