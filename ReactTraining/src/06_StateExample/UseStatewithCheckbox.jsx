/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function UseStatewithCheckbox() {
    const [check,setCheck] = useState(true)

    const handleLiked = (e)=>{
        setCheck(e.target.checked)
    }

  return (
    <div>
        <input type="checkBox" checked={check} onChange={handleLiked} />
        <p>you {check ? "Liked" : "did not like"} this</p>
    </div>
  )
}
