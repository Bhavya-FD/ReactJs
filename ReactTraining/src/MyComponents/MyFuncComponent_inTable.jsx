/* eslint-disable no-unused-vars */
import React from 'react'

export default function MyFuncComponent_inTable() {
    const subjectName = ["C","C++","Java","Python","ReactJs","Mern"]
  return (
    <div>
        <table id='table1'>
            <thead>
                <tr>
                    {subjectName.map((e,i)=>{
                        return <td className='row' key={i}>{e}</td>
                    })}
                </tr>    
            </thead>
        </table>
    </div>
  )
}
