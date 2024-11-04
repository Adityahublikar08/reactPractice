import { useState } from "react"
import '../index.css'
export const LiftingState=()=>{
    const [input,setInput]=useState("");  
    return(
      <>
        <Input input={input} setInput={setInput}/>
        <Display input={input}/>
      </>
    )
}

const Input=({input,setInput})=>{

   return(
<>
<input type="text" value={input} placeholder="Enter ur name" onChange={(e)=>setInput(e.target.value)} />
</>
    )
}

const Display=({input})=>{
    return(
        <h1>Input  value :{input}</h1>
    )
} 