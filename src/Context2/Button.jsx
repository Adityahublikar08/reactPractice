import  { useContext } from 'react'
import { Context } from './RandomContext'

function Button() {
    const{setData,data}=useContext(Context)
    const handle=()=>{
        setData("hello")
    }
  return (
    <div>
        <h1>{data}</h1>
      <button onClick={handle}>
        Click me
      </button>

    </div>
  )
}

export default Button
