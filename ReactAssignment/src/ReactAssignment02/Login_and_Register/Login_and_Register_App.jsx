/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Login_and_Register_App.css'

export default function Login_and_Register_App() {
    const [isOpen, setIsOpen] = useState(false);
    const [modalType, setModalType] = useState(null); // 'login' or 'register'
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const openModal = (type) => {
        setIsOpen(true);
        setModalType(type);
      };
    
      const closeModal = () => {
        setIsOpen(false);
        setModalType(null);
        // Reset form fields
        setEmail('');
        setPassword('');
        setName('');
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (modalType === 'login') {
          // Handle login logic
          console.log("Login with Email:", email, "Password:", password);
        } else if (modalType === 'register') {
          // Handle registration logic
          console.log("Register with Name:", name, "Email:", email, "Password:", password);
        }
        closeModal();
      };
      return (
        <div className="loginapp">
          <h1>Login or Register here..</h1>
          <button className="btn-login" onClick={() => openModal('login')}>Login</button>
          <button className="btn-register" onClick={() => openModal('register')}>Register</button>
    
          {isOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <h2>{modalType === 'login' ? 'Login' : 'Register'}</h2>
                <form onSubmit={handleSubmit}>
                  {modalType === 'register' && (
                    <div className="form-group">
                      <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  )}
                  <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn-submit">
                    {modalType === 'login' ? 'Login' : 'Register'}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      );
}
