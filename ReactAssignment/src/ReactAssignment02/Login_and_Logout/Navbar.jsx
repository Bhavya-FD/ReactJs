/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className='navbar'>
            <h1>My App</h1>
            <ul>
                <li><Link to='/'>Login</Link></li>
                <li><Link to='/logout'>Logout</Link></li>
            </ul>
        </nav>
    </div>
  )
}
