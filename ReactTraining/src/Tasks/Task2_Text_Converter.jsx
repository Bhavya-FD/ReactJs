/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "../Tasks/Task02.css"

export default function Task2_Text_Converter() {
    const [data, setData] = useState("");
    const [textChange, setTextChange] = useState("");
    const [charCount, setCharCount] = useState(0);
    const [wordsCount, setWordsCount] = useState(0);
    const [reverse, setReverse] = useState("");

    const characterCount = ()=>{
        setCharCount(data.length);
        // console.log(charCount);
    }

    const wordCount = ()=>{
        const array = data.trim().split(/\s+/);
        setWordsCount(array.length);
        // console.log(wordsCount);
    }

    const reverseOrder = ()=>{
        const reverseData = data.split('').reverse().join('');
        setReverse(reverseData);
        // console.log(reverseData);
    }

  return (
    <div className='container'>
        <h1 className='textHeading'>* Text Converter *</h1>
        <div className="body">
            <textarea type="text" className="inputDiv" onChange={(e)=>{setData(e.target.value)}} ></textarea>
            <div className="showData" style={{textTransform:textChange}} >
                {data}
                <br />
                <br />
                {reverse}
            </div>
        </div>
        <div className="manager">
            <button className='button' onClick={()=>{setTextChange("uppercase")}}>UpperCase</button>
            <button className='button' onClick={()=>{setTextChange("lowercase")}}>LowerCase</button>
            <button className='button' onClick={()=>{setTextChange("capitalize")}}>Capitalize</button>
            <button className='button' onClick={characterCount}>No. of Character {charCount}</button>
            <button className='button' onClick={wordCount}>No. of Words {wordsCount}</button>
            <button className='button' onClick={reverseOrder}>Reverse</button>
        </div>    
    </div>
  )
}
