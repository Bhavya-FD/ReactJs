/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import '../Login_and_Logout/Login_Logout.css'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleLogin = () => {
          alert(`Welcome! ${username} You are Logged in !!`);
        
          navigate('/logout',{replace:true})
          setUsername('')
          setPassword('')
    };

      return (
        <div>
        <Navbar/>
        <div className="container">
          <h2>Login Page</h2>
          <form>
            <div>
              <label>Username:</label>
              <input type="text" value={username} onChange={(e) => setUsername(e?.target?.value)} />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e?.target?.value)} />
            </div>
            <button style={{width:'100%', margin:'20px auto'}} type="button" onClick={handleLogin}>Login</button>
          </form>
        </div>
          <Footer/>
        </div>
      );
}
