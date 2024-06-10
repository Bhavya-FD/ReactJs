/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function ChildPropExample5(props) {
  return (
    <div>
        <h1>{props.subject}</h1>
    </div>
  )
}
ChildPropExample5.defaultProps = {
    subject : "REACT JS"
}
