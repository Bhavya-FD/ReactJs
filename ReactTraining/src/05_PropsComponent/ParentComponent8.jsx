/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ChildComponent8 from './ChildComponent8';

export default function ParentComponent8() {
    const [username, setUsername] = useState("");
    const [subject, setSubject] = useState("");
    const [city, setCity] = useState("");
    const [button, setButton] = useState(false)
    
    let userData = []
    let obj = {username : username,subject : subject, city : city };
    const handleSubmit = ()=>{
        userData = [userData.push(obj)]
        console.log(username);
        console.log(subject);
        console.log(city);
        console.log(userData);
    }
  return (
    <div>
        <label>Name : </label><input type="text" placeholder='Enter Name' onChange={(e)=>setUsername(e.target.value)} /> <br /> <br />
        <label>Subject : </label><input type="text" placeholder='Enter Subject' onChange={(e)=>setSubject(e.target.value)} /> <br /><br />
        <label>City : </label><input type="text" placeholder='Enter City' onChange={(e)=>setCity(e.target.value)} /> <br/><br />
        <button onClick={handleSubmit}>Submit</button>
      {
        button && <ChildComponent8 userData = {userData}/>
      }
    </div>
  )
}
