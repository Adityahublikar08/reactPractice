import { createContext } from "react";


export const Context=createContext();


export const ContextProvider=({children})=>{
    const data="My name is Aditya Hublikar and im 21 yr old"
    return(

    <Context.Provider value={data}>
        {children}
    </Context.Provider>
    )
}