/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

export default function HomePage2() {
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/ContactPage")
    }
  return (
    <div>
        <h1>Welcome to Home Page</h1>

        <Link to={"/Contact"}>
            <h4>Link : Go to Contact page..</h4>
        </Link>

        <button onClick={handleClick}>useNavigate : Go to Contact page</button>
    </div>
  )
}
