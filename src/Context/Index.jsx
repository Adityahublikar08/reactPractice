import { createContext } from "react";

export const BioContext=createContext();
export const BioProvider=({children})=>{
    const myName="aditya";
    const age=21;
    return(
        <BioContext.Provider value={{myName,age}}>
{children}
        </BioContext.Provider>
    )
}