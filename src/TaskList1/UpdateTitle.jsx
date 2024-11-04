import  { useEffect, useState } from 'react'

function UpdateTitle() {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        document.title=`count:${count}`
    },[count])
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Count++ {count}</button>
        <button onClick={()=>setCount(count-1)}>Count-- {count}</button>

      
    </div>
  )
}

export default UpdateTitle
