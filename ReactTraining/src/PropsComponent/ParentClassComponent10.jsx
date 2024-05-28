/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import ChildClassComponent10 from './ChildClassComponent10'

export default class ParentClassComponent10 extends Component {
    handleClick = ()=>{
        alert("Clicked by user!")
    }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click-Parent Component</button>
        <ChildClassComponent10 myfun={this.handleClick} subject="ReactJs"/>
      </div>
    )
  }
}
