/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AboutPage3() {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Welcome to About page</h1>

        <button onClick={()=>{navigate(-1)}}>Go back</button>
    </div>
  )
}

