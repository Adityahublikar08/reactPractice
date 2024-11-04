import { createContext } from "react";



export const Context= createContext();


export const ContextProvider=({children})=>{
    const name="aditya"
    const age=21;
    return(

        <Context.Provider value={{name,age}}>
            {children}
        </Context.Provider>
    )
}