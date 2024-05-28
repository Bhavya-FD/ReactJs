/* eslint-disable no-unused-vars */
import React from 'react'

export default function MyFunctionComponent5() {
    const subjectList = ["C","Python","C++","Java","ReactJs"]
  return (
    <div>
        <ul>
            {subjectList.map((e,i)=>{
                return <li key={i}>{e}</li>
            })}
        </ul>
    </div>
  )
}
