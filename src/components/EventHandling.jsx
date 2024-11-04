import styled from 'styled-components'
export const EventHandling=()=>{
//    function handleButtonClick(){
//     alert("Hey I am OnClick Event");
//    }

const handleButtonClick=(event)=>{
    alert("hey");
    console.log(event);
  
}

// const handleUserWelcome=(user)=>{
//     // alert(`hello ${user} ,Welcome to react`);
// }
const handleUserWelcome=()=>{
    let a=prompt("enter your name");
    alert(`Hello ${a} welcome to react`);
}

const Button=styled.button({
backgroundColor:"yellow",
padding:"20px",
height:"120px",
width:"120px",
color:"red",
fontFamily:"sans-serif",
fontSize:"30px",
fontWeight:"bold"


})
    return(
        <div style={{display:"flex",gap:"20px",justifyContent:"center"}}>
        <Button onClick={handleButtonClick}>Click me</Button><br />
        <Button onClick={()=>handleButtonClick(event)}>Click me 2</Button><br />

        {/* <Button onClick={()=>handleUserWelcome("Aditya")}>Click Me</Button> */}
        <Button onClick={()=>handleUserWelcome()}>Click Me</Button>
        </div>

    );
}