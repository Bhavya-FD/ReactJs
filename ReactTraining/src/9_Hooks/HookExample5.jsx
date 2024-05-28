/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

export default function HookExample5() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const resultData = await response.json();
            setData(resultData);
        }

        fetchData();
    },[data])

  return (
    <div>
        {data 
            ?
            <table border={5}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>ZipCode</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company Name</th>
                        <th>Catch Phrase</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((e,i)=>{
                       return <tr key={i}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.username}</td>
                            <td>{e.email}</td>
                            <td>{e.address.city}</td>
                            <td>{e.address.zipcode}</td>
                            <td>{e.phone}</td>
                            <td>{e.website}</td>
                            <td>{e.company.name}</td>
                            <td>{e.company.catchPhrase}</td>
                       </tr>
                        
                    })}
                </tbody>
            </table>
            : <p>...Error Fetching Data</p>
        }
    </div>
  )
}
