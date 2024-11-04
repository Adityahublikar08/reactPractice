import {Profile} from './Profile'
import img from '../api/Profile.json'
import styled from 'styled-components';

export const ProfileCard=()=>{
    // const Ul=styled.li({
    //     display:"flex",
    //     justifyContent:"center",
    //     alignItems:"center",
    //     gap:"20",
       
    // })
    const Div=styled.div({
        height:"100%",
        width:"100%",
        padding:"50px"
    })
    return(
        <Div>
            <ul className='grid grid-three-cols'>
            {
            img.map((curnt)=>{
                return(
                    <Profile key={curnt} curnt={curnt}/>

                );
            })
                
            }

        </ul>
        </Div>

    );
}