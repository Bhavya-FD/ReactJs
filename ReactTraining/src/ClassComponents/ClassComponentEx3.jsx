/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

export default class ClassComponentEx3 extends Component {
    constructor(){
        super()
        this.state={
            name:"Bhavya",
            counter:0
        }
    }
    handleIncrement=()=>{
        this.setState({counter : this.state.counter+1})
    }
    handleDecrement=()=>{
        this.setState({counter : this.state.counter-1})
    }
  render() {
    return (
      <div>
        <h1>Counter = {this.state.counter}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    )
  }
}
