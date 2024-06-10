/* eslint-disable no-unused-vars */
import React from 'react'
import { useLocation } from 'react-router-dom'

export default function UseLocationExample() {
    const location = useLocation();
  return (
    <div>
        <h1>Use Location page</h1>

        {location.pathname} <br />
        {location.search} <br />
        {location.hash}
    </div>
  )
}
