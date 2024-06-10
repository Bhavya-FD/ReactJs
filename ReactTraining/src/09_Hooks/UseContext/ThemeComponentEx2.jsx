/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { themeContext } from './ThemeComponentEx1'

export default function ThemeComponentEx2() {
    const {theme} = useContext(themeContext);

    const myStyle = {
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white"
    }
  return (
    <div>
        <h1>Current theme is {theme}</h1>
    </div>
  )
}
