/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

export default function Page01() {

  return (
    <div>
        <h1>Page 1</h1>
        <Link to={"/Page/1"}>id 1 send to page 2</Link> 
        <br /><br />
        <Link to={"/Page/2"}>id 2 send to page 2</Link>
        <br /><br />
        <Link to={"/Page/2/BhavyaGandhi"}>send id & name to page 2</Link>
        
    </div>
  )
}
