/* eslint-disable no-empty */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "../08_MapCrud/Crud_Style.css"
import { useRef } from 'react';


export default function Map_Crud_Example() {
    
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [contact, setContact] = useState("");
    const [city, setCity] = useState("");
    const [editIndex,setEditIndex] = useState(null);
    const [span, setSpan] = useState("hidden")

    const [records, setRecords] = useState([]);
    const deleteData = useRef();

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Button Clicked");

        const newRecords = {name,subject,contact,city}
        if (editIndex != null) {
            // Update
            const updateRecord = [...records]
            updateRecord[editIndex] = newRecords;
            setRecords(updateRecord);
            setEditIndex(null)
        }else{
            // Submit
            setRecords([...records,newRecords]);
        }
        setName("")
        setSubject("")
        setCity("")
        setContact("")
    }
    const handleDelete = (index)=>{
        // console.log(index);
        let lastRecords = records;
        console.log(lastRecords);       //before delete
        lastRecords.splice(index,1)
        setRecords([...lastRecords]);
        console.log(lastRecords);           //After Delete
        // console.log(deleteData.current.innerHTML)
        setSpan("visible")
        setTimeout(() => {
            setSpan("hidden")
        }, 1500);
        
    }
    const handleEdit= (index)=> {
        const fetchOldData = records[index];
        // console.log(fetchOldData);
        setEditIndex(index);

        setName(fetchOldData.name)
        setSubject(fetchOldData.subject)
        setContact(fetchOldData.contact)
        setCity(fetchOldData.city)
    }
  return (
    <div className='container1'>
        <div className="body1">
            <h1 className='myHeading'>CRUD Application</h1>
            <form className='myForm' onSubmit={handleSubmit}>
                <input type="text" value={name} placeholder='Enter Student name : ' onChange={(e)=>setName(e.target.value)} /> <br />
                <input type="text" value={subject} placeholder='Enter subject : ' onChange={(e)=>setSubject(e.target.value)} /> <br />
                <input type="number" value={contact} placeholder='Enter Contact no. : ' onChange={(e)=>setContact(e.target.value)} /> <br />
                <input type="text" value={city} placeholder='Enter city : ' onChange={(e)=>setCity(e.target.value)} /> <br />
                <button className='myButton'>{editIndex != null ? "Update" : "Submit"}</button>
            </form>

            <table className='myTable'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>Contact no.</th>
                        <th>City</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((item,index)=>{
                        return <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.subject}</td>
                                    <td>{item.contact}</td>
                                    <td>{item.city}</td>
                                    <td><i onClick={()=>handleEdit(index)} className="fa-solid fa-pen-to-square icon"></i></td>
                                    <td><i onClick={()=>handleDelete(index)} className="fa-solid fa-trash icon"></i></td>
                               </tr>
                    })}
                </tbody>
            </table>
            <span className='spnClass' style={{visibility:span}} ref={deleteData}>Student Data Deleted !</span>
        </div>
    </div>
  )
}
