/* eslint-disable no-unused-vars */
import React from 'react'
import ChildPropExample2 from './ChildPropExample2'

export default function ParentPropExample2() {
  return (
    <div>
        <ChildPropExample2>
            <h1>Hello this is a Child component</h1>
            <h3>this is in parent Component</h3>
        </ChildPropExample2>
    </div>
  )
}
