/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

export default class ClassComponentEx4 extends Component {
    constructor(){
        super();
        this.state = {
            bgColor : true
        }
    }
    changeColor = ()=>{
        // this.setState({bgColor:!this.state.bgColor})
        {
            this.setState({bgColor:!this.state.bgColor}) ? <div style={{background:"red"}}>hello</div> : <div style={{background:"blue"}}>hii</div>
        }
    }
  render() {
    return (
      <div>
        {/* {
            bgColor ? <div style={{background:"red"}}>hello</div> : <div style={{background:"blue"}}>hii</div>
        } */}
        {/* <div style={{height:"200px",width:"200px",border:"1px solid black",background:this.state.bgColor}}></div> */}
        <button onClick={this.changeColor}>Change</button>
      </div>
    )
  }
}
