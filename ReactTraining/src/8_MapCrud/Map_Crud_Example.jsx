/* eslint-disable no-empty */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function Map_Crud_Example() {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [city, setCity] = useState("");
    const [editIndex,setEditIndex] = useState(null);

    const [records, setRecords] = useState([]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Button Clicked");

        const newRecords = {name,subject,city}
        if (editIndex != null) {
            // Update
            const updateRecord = [...records]
            updateRecord[editIndex] = newRecords;
            setRecords(updateRecord);
        }else{
            // Submit
            setRecords([...records,newRecords]);
        }
        setName("")
        setSubject("")
        setCity("")
    }
    const handleDelete = (index)=>{
        // console.log(index);
        let lastRecords = records;
        console.log(lastRecords);       //before delete
        lastRecords.splice(index,1)
        setRecords([...lastRecords]);
        console.log(lastRecords);           //After Delete
    }
    const handleEdit= (index)=> {
        const fetchOldData = records[index];
        // console.log(fetchOldData);
        setEditIndex(index);

        setName(fetchOldData.name)
        setSubject(fetchOldData.subject)
        setCity(fetchOldData.city)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} placeholder='Enter name : ' onChange={(e)=>setName(e.target.value)} /> <br />
            <input type="text" value={subject} placeholder='Enter subject : ' onChange={(e)=>setSubject(e.target.value)} /> <br />
            <input type="text" value={city} placeholder='Enter city : ' onChange={(e)=>setCity(e.target.value)} /> <br />
            <button>{editIndex != null ? "Update" : "Submit"}</button>
        </form>

        <table border={1}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Subject</th>
                    <th>City</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>
            <tbody>
                {records.map((item,index)=>{
                    return <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.subject}</td>
                                <td>{item.city}</td>
                                <td><button onClick={()=>handleEdit(index)}>Edit</button></td>
                                <td><button onClick={()=>handleDelete(index)}>Delete</button></td>
                           </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
