/* eslint-disable no-unused-vars */
import React from 'react'
import { useLocation } from 'react-router-dom'

export default function OutPutPage() {
    const location = useLocation();

    const {name} = location.state;
  return (
    <div>
        <h1>Msg fron 1st page : {name} </h1>
    </div>
  )
}
