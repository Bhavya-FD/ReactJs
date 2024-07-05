/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../Login_and_Logout/Login_Logout.css'
import Navbar from './Navbar';
import Footer from './Footer';

export default function LogoutPage() {
    const navigate = useNavigate()

    const handleLogout = () => {
        navigate('/',{replace:true})
      };
    return (
      <div>
        <Navbar/>
        <div className="container">
          <h2>Logout Page</h2>
          <p>You have been logged out.</p>
          <button type="button" onClick={handleLogout}>Logout</button>
        </div>
        <Footer/>
      </div>  
      );
}
