/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

export default class ClassComponentEx2 extends Component {
    constructor(){
        super();        //we are calling parent Class (component) property 
        this.state = {
            // Variable define here
            Number : 10  //Initialization
        }
    }
  render() {
    return (
      <div>
        <h1>Number = {this.state.Number}</h1>
      </div>
    )
  }
}
