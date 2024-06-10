/* eslint-disable no-unused-vars */
import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../FireBaseConfig'

export default function RegistrationPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log("---> Submit Button Clicked");

        const userCredentials = await createUserWithEmailAndPassword(auth,email,password);

        setName("")
        setEmail("")
        setPassword("")
    }
  return (
    <div>
        <form onSubmit={(e)=>{handleSubmit(e)}}>
            <input type="text" value={name} placeholder='Enter Name' onChange={(e)=>{setName(e.target.value)}} />
            <br /><br />
            <input type="email" value={email} placeholder='Enter Email' onChange={(e)=>{setEmail(e.target.value)}} />
            <br /><br />
            <input type="password" value={password} placeholder='Enter Password' onChange={(e)=>{setPassword(e.target.value)}} />
            <br /><br />
            <button>Submit</button>
        </form>
    </div>
  )
}
