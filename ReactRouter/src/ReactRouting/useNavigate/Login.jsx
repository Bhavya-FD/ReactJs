/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Login page</h1>
        <button onClick={()=>{navigate("/home", {replace:true})}}>Sign in</button>
    </div>
  )
}
