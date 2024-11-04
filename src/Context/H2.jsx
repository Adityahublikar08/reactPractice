import  { useContext } from 'react'
import { Context } from './H1'

function H2() {
    const{degree,highest_qualification,clgName}=useContext(Context)
  return (
    <div>
        <h1>college:{clgName}</h1>
      <h1>Degree:{degree}</h1>
      <h2>Qualifiaction:{highest_qualification}</h2>
    </div>
  )
}

export default H2
