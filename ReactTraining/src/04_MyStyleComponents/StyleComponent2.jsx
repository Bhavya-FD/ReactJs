
export default function StyleComponent2() {
    // Internal CSS Style

    const myStyle = {
        myContainer:{
            backgroundColor: "gray",
            color: "white",
            padding: "10px"
        },
        myHeading:{
            backgroundColor: "black",
            color: "green"
        }
    }
  return (
    <div style={myStyle.myContainer}>
        <h1 style={myStyle.myHeading}>Hello</h1>
    </div>
  )
}
