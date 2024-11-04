import React, { useContext } from 'react'
import { Context } from './Context'

function Demo() {
    const{count,setCount}=useContext(Context)
    const handleClick=()=>{
        setCount(count+1)
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>CLick me</button>
    </div>
  )
}

export default Demo
