import { useState } from "react"

export default function UseStateExample1() {
    const [count, setCount] = useState(100)              //useState(Initial state) / default value

    const handlerBtn = ()=>{
        console.log("Button Clicked");
        // setCount(500)
        setCount(count+1)
    }
    
  return (
    <div>
        <h1>Hello {count}</h1>
        <button onClick={handlerBtn}>Change</button>
    </div>
  )
}
