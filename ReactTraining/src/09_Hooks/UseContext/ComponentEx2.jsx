/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { myContext } from './ComponentEx1'

export default function ComponentEx2() {
    const record = useContext(myContext);
  return (
    <div>
        <h3>Component2</h3>
        <p>{record.name}</p>
        <p>{record.subject}</p>
    </div>
  )
}
