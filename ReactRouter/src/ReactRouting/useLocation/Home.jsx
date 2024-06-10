/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1>Home page</h1>
        <Link to={"/useLocation"}><button>Go to 2nd page</button></Link>
    </div>
  )
}
