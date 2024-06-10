/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import ClassComponentEx1 from './ClassComponentEx1'
import ClassComponentEx2 from './ClassComponentEx2'
import ClassComponentEx3 from './ClassComponentEx3'
import ClassComponentEx4 from './ClassComponentEx4'
import ClassComponentEx5 from './ClassComponentEx5'

export default class AllClassComponents extends Component {
  render() {
    return (
      <div>
        {/* <ClassComponentEx1/> */}
        {/* <ClassComponentEx2/> */}
        {/* <ClassComponentEx3/> */}
        {/* <ClassComponentEx4/> */}
        {/* Conditional rendering with ternary operator */}
        <ClassComponentEx5/>
      </div>
    )
  }
}
