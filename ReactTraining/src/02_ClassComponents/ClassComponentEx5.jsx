/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

export default class ClassComponentEx5 extends Component {
    constructor(){
        super();
        this.state = {
            isVisible : true
        }
    }
    handleButton = ()=>{
        this.setState({isVisible : !this.state.isVisible})
    }
  render() {
    return (
        <div>
          {this.state.isVisible ? <h1>Hello</h1> : <h1>Hiii</h1> }
        <button onClick={this.handleButton}>Click here</button>
      </div>
    )
  }
}
