/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { Children, createContext, useState } from 'react'

export const themeContext = createContext();

export default function ThemeComponentEx1() {
    const [theme, setTheme] = useState("light");

    const ToggleTheme = ()=>{
        // setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
        setTheme(theme === "light" ? "dark" : "light");
    }

  return (
    <div>
            <themeContext.Provider value={{theme, ToggleTheme}}>
                {Children}
            </themeContext.Provider>
    </div>
  )
}
