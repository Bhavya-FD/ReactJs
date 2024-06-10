/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage1() {
  return (
    <div>
        <h1>Welcome to Home Page</h1>

        <Link to={"/Contact"}>
            <h4>Link : Go to Contact page..</h4>
        </Link>
    </div>
  )
}
