/* eslint-disable no-unused-vars */
import React from 'react'
import ChildProp7 from './ChildProp7'

export default function ParentProp7() {
    const products = [
        {id:1, name : "AAA", subject : "Node"},
        {id:2, name : "BBB", subject : "React"},
        {id:3, name : "CCC", subject : "python"}
    ]
  return (
    <div>
        <ChildProp7 product = {products}/>
    </div>
  )
}
