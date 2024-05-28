import { useState } from "react"

export default function UseStateExample2() {
    const [count, setCount] = useState(0)

  return (
    <div>
        <h1>This is an Example of useState with Increament and Decreament</h1>
        <button onClick={()=>{setCount(count-1)}}>Deacrement</button>
        <span style={{fontSize: "25px" ,margin : "0px 20px"}}>Counter {count}</span>
        <button onClick={()=>{setCount(count+1)}}>Increament</button>
    </div>
  )
}
