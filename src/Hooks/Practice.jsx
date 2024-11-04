
import { useState } from 'react';
import '../index.css';

// const users=[
//     {Name:"Aditya",age:21},
//     {Name:"Sidya",age:21},
//     {Name:"Vaishu",age:21},
//     {Name:"Anya",age:22},
//     {Name:"Om",age:22},
//     {Name:"Tandya",age:22},
//     {Name:"Raj",age:22},
// ];


const Practice = () => {
    const [users,setUsers]=useState(
        [
            {Name:"Aditya",age:21},
            {Name:"Sidya",age:21},
            {Name:"Vaishu",age:21},
            {Name:"Anya",age:22},
            {Name:"Om",age:22},
            {Name:"Tandya",age:22},
            {Name:"Raj",age:22},
        ]
    );

    const userCount=users.length;
    const avg=users.reduce((accum,curElem)=>accum+curElem.age,0)/userCount;

    return (
    <ul className=" bg-rose-500 flex justify-center items-center flex-col gap-3 p-10 text-base">
     <h1>User List</h1>
      {users.map((curntElem)=>{
        return(
          <>
          <li key={curntElem}>
            {curntElem.Name} - {curntElem.age} Year old
          </li>
          
          </>
          
        );
      })}
      <p>total Users:{userCount}</p>
      <p>Average UserCount:{avg.toFixed(2)}</p>
    </ul>
  )
}

export default Practice

//rfac

  
