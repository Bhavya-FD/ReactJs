/* eslint-disable no-unused-vars */
import React from 'react'
import ChildProp6 from './ChildProp6'

export default function ParentProp6() {
    const mySubjects = ["C","C++","java","python","react"]
  return (
    <div>
        {/* note : key is inbuitl prop in reactjs we can not take it as a custom prop */}
        <ChildProp6 subject = {mySubjects}/>
    </div>
  )
}
