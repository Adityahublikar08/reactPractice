/* eslint-disable no-undef */
import { createContext, useState } from "react";


export const UserContext1=createContext();

export const UserContextProvider=({children})=>{
    const[name,setName]=useState("")
    const[age,setAge]=useState(0)
    const[city,setCity]=useState("")
    const[edu,setEdu]=useState("")

    return(
        <UserContext1.Provider value={{name,setName,age,setAge,city,setCity,edu,setEdu}}>
           {children}
        </UserContext1.Provider>
    )
}

