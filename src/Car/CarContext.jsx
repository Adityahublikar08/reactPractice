/* eslint-disable react/prop-types */
import { createContext } from "react";

export const CarContext=createContext();

const CarContextProvider=({children})=>{
    const heading="Car Management System"

    return(
        <CarContext.Provider value={{heading}}>
            {children}
        </CarContext.Provider>
    )
}

export default CarContextProvider;
