import { useState } from "react"

export const ConditionalRen=()=>{
    const[input,setInput]=useState(false);
    const handleButtonClick=()=>{
        return(
         setInput(!input)
        );
    }
    return(
        <>
      {  input ?(<h1>Login</h1>):(<h1>Not Login</h1>)}
      <button onClick={handleButtonClick}>Click Me</button>

        </>
    )
}