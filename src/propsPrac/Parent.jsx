import React from 'react'
import Child from './Child'

function Parent() {
  const data=[
    {name:"aditya",age:21,Education:"MSc.cs"},
    {name:"raj",age:21,Education:"BSc.cs"},
    {name:"Anya",age:21,Education:"BSc.cs"},
    {name:"Sidya",age:21,Education:"MSc.cs"},
  ]
    return (
    <div>
        {
            data.map((curElem,index)=>{
                return(
                    <Child key={index} data1={curElem}/>
                )
            })
        }
      
    </div>
  )
}

export default Parent
