/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

export default class ChildClassComponent10 extends Component {
  render() {
    const {myfun,subject} = this.props;
    return (
      <div>
        <button onClick={myfun}>Click-Child Component</button>
      </div>
    )
  }
}
