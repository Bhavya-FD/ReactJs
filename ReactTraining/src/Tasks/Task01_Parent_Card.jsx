/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "../Tasks/Task01.css"
import Task01_Child from './Task01_Child';

export default function Task01_Parent_Card() {
  
  const [username, setUsername] = useState("");
  const [subject, setSubject] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState(true)
  const [button, setButton] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault();
    setButton(true)
    if (gender=="male") {
      setImage(<img src="../../Images/boy3d_image.webp" alt="" />)
    } else {
      setImage(<img src="../../Images/girl3D_image.avif" alt="" />)
    }
  }

  return (
    <div id='flex'>
      <form action="" className='form'>
        <label>Name : </label><input type="text" className='formInput' placeholder='Enter Name' onChange={(e)=>setUsername(e.target.value)} /> <br />
        <label>Subject : </label><input type="text" className='formInput' placeholder='Enter Subject' onChange={(e)=>setSubject(e.target.value)} /> <br />
        <label>City : </label><input type="text" className='formInput' placeholder='Enter City' onChange={(e)=>setCity(e.target.value)} /> <br/>
        <label>Email : </label><input type="email" className='formInput' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} /> <br />
        <label>Gender : </label><input type="text" className='formInput' placeholder='Enter Gender' onChange={(e)=>setGender(e.target.value)} /> <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {
        button && <Task01_Child img={image} name={username} sub={subject} city={city} email={email} gender={gender}></Task01_Child>
      }
      
    </div>
  )
}
