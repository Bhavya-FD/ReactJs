/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

export default function Crud_in_LocalStorage() {
    const myStyle={
      button:{
        backgroundColor : "grey",
        color : "white",
        padding : "10px 15px",
        borderRadius : "10px",
        fontSize : "18px",
        margin : "10px"
      }
    }

    const [name, setName] = useState("")
    const [subject, setSubject] = useState("")
    const [city, setCity] = useState("")
    const [student, setStudent] = useState([]);

    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        let allRecords = JSON.parse(localStorage.getItem("students")) || [];
        setStudent(allRecords);
        console.log(allRecords);
    }, [])

    let data = {id:Date.now(), name,subject,city}
    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(name);
        // console.log(subject);
        // console.log(city);
        if (editIndex!==null) {
          console.log("Update");
          let updateStudents = [...student];
          updateStudents[editIndex] = {id: student[editIndex].id, name, subject, city};
          setStudent(updateStudents);
          localStorage.setItem("Students", JSON.stringify(updateStudents));
          // Reset editIndex after update
          setEditIndex(null);
        } else {
          
          setStudent([...student,data]);
          console.log(student);
          localStorage.setItem("Students", JSON.stringify([...student, data]))
        }

        setName("");
        setSubject("");
        setCity("");
    }

    // Delete button 
    const handleDelete = (index)=>{
      console.log("button clicked");
      console.log(`delete index = ${index}`);
      const allRecords = student.filter((e,i)=> i !== index);
      console.log(allRecords);
      setStudent(allRecords);
      localStorage.setItem("students",JSON.stringify(allRecords))
    }

    // Edit Button
    const handleEdit = (index)=>{

      setEditIndex(index);
      console.log(student[index]);
      setName(student[index].name);
      setSubject(student[index].subject);
      setCity(student[index].city);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder='Enter Subject' value={subject} onChange={(e)=>setSubject(e.target.value)}/>
            <input type="text" placeholder='Enter City' value={city} onChange={(e)=>setCity(e.target.value)}/> <br />

            <button type='submit' style={myStyle.button}>{editIndex !== null ? "Update" : "Submit"}</button>
        </form>
        <br />
        <table border={1} width={600}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Subject</th>
              <th>City</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>  
          {student.map((item,i)=>{
            return  <tr key={i}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.subject}</td>
                      <td>{item.city}</td>
                      <td><button style={myStyle.button} onClick={handleEdit}>Edit</button></td>
                      <td><button style={myStyle.button} onClick={handleDelete}>Delete</button></td>
                    </tr>
          })}
          </tbody>
        </table>
    </div>
  )
}
