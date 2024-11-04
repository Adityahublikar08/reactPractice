import  { useRef } from 'react'

function Count() {
    const count=useRef(0)
    const handleData=()=>{
        count.current+=1
        console.log(count.current)
    }
  return (
    <div>
      <h1>{count.current}</h1>
      <button onClick={handleData}>Click me</button>
    </div>
  )
}

// function Count()
// {
//     let count=0;
//   const handleData=()=>{
//     count+=1;
//     console.log(count)
//   }
//     return(
//        <>
//         <h1>{count}</h1>
//         <button onClick={handleData}>Click me</button>
//        </>
//     )
// }

export default Count
