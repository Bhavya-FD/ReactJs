/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

export default function ChildpropExample3(props) {
  return (
    <div> <br />
         <button onClick={props.myfun}>Click here-Child Component</button>
    </div>
  )
}
