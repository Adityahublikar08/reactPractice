import { useState } from "react"
import '../index.css'

export const Button=()=>{

//     let  value=0;
//     const handleButtonClick=()=>{
//   value++;
//   console.log(value);
//     } in this way only console dom value get change it will not show on html

//1
const handleButtonClick=()=>{
setCount(count+1);
}
const  [count,setCount]=useState(0);
//count=>current state ,setCount=> state channging function,useState=>react hook,(0)=>initial value of crnt state


//2
const array=["aditya","vaishu","sidya","om","raj","anya","tandya","sakshi","anvi","abhi"]
const handleButtonClick2=()=>{
    setStr(()=>str+1 )
}
const [str,setStr]=useState(0);

//3
const colr=["yellow","red","pink","yellowgreen","lightblue","gray","orange","grey"];
const[clr,setClr]=useState(0);
const handleButtonColor=()=>{
    setClr(clr+1);
}




    return (
    <div className="flex justify-center items-center gap-4 m-8 text-center">
   <div>
   <h1 >{count}</h1>
    <button 
    style={{backgroundColor:"yellow", padding:"10px",border:"2px solid black", fontSize:"10px"
    }}
onClick={handleButtonClick} >Click Me</button>
   </div>

   <div>
    <h1>{array[str]}</h1>
    <button onClick={handleButtonClick2}
     style={{backgroundColor:"yellow", padding:"10px",border:"2px solid black", fontSize:"10px"
     }}
    >Change Name</button>
   </div>

   <div>
   <h1>ChangeColor</h1>
    <button onClick={handleButtonColor}
     style={{backgroundColor:`${colr[clr]}`, padding:"10px",border:"2px solid black", fontSize:"10px"
     }}
    >Change color</button>
   </div>
    </div>
)
}
