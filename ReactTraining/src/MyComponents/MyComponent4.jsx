/* eslint-disable no-unused-vars */
import React from 'react'
import MyComponent3 from './MyComponent3'

export default function MyComponent4() {
    const list = [1,2,3,4,5]
  return (
    <div>
        {
            list.map((e,i)=>{
                return  <MyComponent3 key={i}/>
            })
        }
    </div>
  )
}
