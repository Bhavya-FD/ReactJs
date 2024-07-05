/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './LoginPage'
import LogoutPage from './LogoutPage'

export default function Router() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={LoginPage}></Route>
                <Route path='/logout' Component={LogoutPage}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
