/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ContactPage2() {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Contact Page</h1>
        <Link to={"/About"}>
            <h4>Link : Go to About page...</h4>
        </Link>
        <button onClick={()=>{navigate("/AboutPage")}}>useNavigate : Go to About Page</button>
    </div>
  )
}
