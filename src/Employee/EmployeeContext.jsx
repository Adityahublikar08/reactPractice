import { createContext } from "react";

export const EmployeeContext=createContext();

export const EmployeeContextProvider=({children})=>{
    const name="aditya";

    return(
        <EmployeeContext.Provider value={{name}}>
            {children}
        </EmployeeContext.Provider>
    )
}