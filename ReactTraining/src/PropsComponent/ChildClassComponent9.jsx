/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

export default class ChildClassComponent9 extends Component {
  render() {
    // Destructor
    const {subject,marks} = this.props;
    return (
      <div>
        <h3>Subject : {subject}</h3>
        <h3>Marks : {marks}</h3>
      </div>
    )
  }
}
