/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactPage1() {
  return (
    <div>
        <h1>Contact Page</h1>
        <Link to={"/About"}>
            <h4>Link : Go to About page...</h4>
        </Link>
    </div>
  )
}
