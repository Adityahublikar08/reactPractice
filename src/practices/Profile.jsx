import styled from 'styled-components'
export const Profile=(props)=>{
    const{img,name,age,city,Gender,Qualification,contact}=props.curnt;
    const H1=styled.h1({
        color:"black",
        fontFamily:"sans-serif",
        fontWeight:"bold"
    })
    const Li=styled.li({
      boxShadow:"10px 10px 2px grey,-2px -2px 2px grey",
     
      backgroundColor:"white",
      border:"1px solid red",
      borderRadius:"10px"
    })
    
    return(
        <Li>
           <div> <img src={img} height="500" width="100%"/></div>
            <div style={{padding:"0px 20px"}}>
            <H1 style={{color:"black"}}>Name:{name}</H1>
            <h2>Age:{age}</h2>
            <h2>City:{city}</h2>
            <p>Gender:{Gender}</p>
            <strong>Qualification:{Qualification}</strong>
            <p>Contact:{contact}</p>

            </div>


        </Li>

    );
}