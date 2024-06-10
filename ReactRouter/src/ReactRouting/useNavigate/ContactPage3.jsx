/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ContactPage3() {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Contact Page</h1>
        <Link to={"/About"}>
            <h4>Link : Go to About page...</h4>
        </Link>
        <button onClick={()=>{navigate("/AboutPage3")}}>useNavigate : Go to About Page</button>
        <br /> <br />
        <button onClick={()=>{navigate('/')}}>useNavigate : Go to Home Page</button>
        <br /> <br />
        <button onClick={()=>{navigate(1)}}>Go to next page</button>
    </div>
  )
}
