import { createContext, useState } from "react";



export const Context=createContext();


export const ContextProvider=({children})=>{
    const[lang,setLang]=useState(false)

    
    return(
        <Context.Provider value={{lang,setLang}}>
            {children}
        </Context.Provider>

    )
}