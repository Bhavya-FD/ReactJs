/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'

export default function Page02() {
    const {id,name} = useParams()
  return (
    <div>
        <h1>Page 2</h1>
        <p>id = {id}</p>
        {name && <p> Name = {name}</p>}
    </div>
  )
}
