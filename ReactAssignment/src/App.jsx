/* eslint-disable no-unused-vars */
import React from 'react'
import CounterApp from './ReactAssignment02/CounterApp/CounterApp'
import Router from './ReactAssignment02/Login_and_Logout/Router'
import ToDo_List from './ReactAssignment02/TODO_App/ToDo_List'
import ListViewApp from './ReactAssignment02/ListViewApp/ListViewApp'
import Login_and_Register_App from './ReactAssignment02/Login_and_Register/Login_and_Register_App'
import Element_on_Mouse_Move from './ReactAssignment02/Element_on_Mouse_Move'

export default function App() {
  return (
    <div>
      {/* List View in Reactjs */}
          {/* <ListView_in_React/> */}
      
      {/* Counter App */}
          {/* <CounterApp/> */}

      {/* Login and Logout pages */}
          {/* <Router/> */}

      {/* To do list */}
          {/* <ToDo_List/> */}

      {/* List view Dynamically */}
          {/* <ListViewApp/> */}

      {/* Modal display on click of login or register */}
          {/* <Login_and_Register_App/> */}

      {/* Move an Element on mouse move */}
            <Element_on_Mouse_Move/>
    </div>
  )
}
