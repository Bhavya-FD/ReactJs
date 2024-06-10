/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

export default function HomePage3() {
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/ContactPage3")
    }
  return (
    <div>
        <h1>Welcome to Home Page</h1>

        <Link to={"/ContactPage3"}>
            <h4>Link : Go to Contact page..</h4>
        </Link>

        <button onClick={handleClick}>useNavigate : Go to Contact page</button> <br /> <br />
        <button onClick={()=>{navigate('/AboutPage3')}}>Go to About Page</button>
        

    </div>
  )
}
