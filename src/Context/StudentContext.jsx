/* eslint-disable react/prop-types */
// import React, { createContext } from 'react'

// const StudentContext = createContext()
import React from 'react'

export const StudentContext = React.createContext()

const StudentContextProvider = ({ children }) => {
  const azad = 'what that'
  const azad1 = 'you dont know me'


  return (
    <StudentContext.Provider value={{azad,azad1}}>{children}</StudentContext.Provider>
  )
}

export default StudentContextProvider