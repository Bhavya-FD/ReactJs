/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function ChildPropExample1(props) {
  return (
    <div>
        <h1>Hello this is {props.name}</h1>
        <h2>My Subject is {props.language}</h2>
    </div>
  )
}
