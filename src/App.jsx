// import { EventHandling } from "./components/EventHandling";
// import { EventHandling2 } from "./components/EventHandling2";
// import { EventPropagation } from "./components/EventPropagation";
// import { EventProps } from "./components/EventProps";
// import { NetflixSeries } from "./components/NetflixSeries";
// import Practice from "./Hooks/Practice";
// import { Button } from "./Hooks/State1";
// import { Button1 } from "./Hooks/State2";
// import Task from "./Hooks/Task";
// import './index.css';
// import { Task1 } from './propsPrac/Task1';
// import {P1} from './propsPrac/P1'
// import { ProfileCard } from "./practices/ProfileCard";
// import styled from "styled-components";
// import { LiftingState } from "./components/LiftingState";
// import { ConditionalRen } from "./Hooks/ConditionalRen";
// import { ToggleButton } from "./projects/TogleButton/ToggleButton";

// import { ContextProvider } from "./Hooks/ContextApi/Home";
import { Context, ContextProvider } from "./Hooks/ContextApi/Context";

import UseId from "./Hooks/UseId/UseId";
import Count from "./Hooks/UseRef/Count";
import Demo from "./Hooks/UseRef/Demo";
import Index from "./Hooks/ContextApi/Index";

// import ShortCircuitEval from "./components/ShortCircuitEval";
// import StateChange from "./Hooks/StateChange";
// import { Todo } from "./projects/TodoList/Todo";
// import "./projects/TodoList/Todo.css";
// import Parent from "./propsPrac/Parent";
// import CleanUp from "./UseEffect/CleanUp";
// import FetchApi from "./UseEffect/FetchApi";
// import FetchApi2 from "./UseEffect/FetchApi2";
// import ReactUseEffect from "./UseEffect/ReactUseEffect";
// import UseEffectChallenge from "./UseEffect/UseEffectChallenge";
// import Login from "./UseState/Login";
// import Registration from "./UseState/Registration";

// // import './index.css'
// const App = () => {
//   const style = {
//     margin: "10px 10px",
//     padding: "10px",
//     fontSize: "30px",
//     color: "red",
//   };
//   // const H1=styled.h1({
//   //    textAlign:"center",
//   //    fontFamily:"sans-serif",
//   //    fontSize:"50px",
//   //    color:"whitesmoke"

//   // })
//   return (
//     //  <div className="container">
//     //   {/* <h1 className='card-heading' style={style}>List of BlockBuster Movies</h1>
//     //       <NetflixSeries/> */}

//     //  </div>
//     //   <EventHandling/>
//     // <EventHandling2/>
//     //  <EventProps/>
//     //<EventPropagation/>
//     // <>
//     //   <Button />
//     //   <Button1 />
//     // </>

//     // <Practice/>
//     // <Task/>
//     // <LiftingState/>
//     // <ConditionalRen/>
//     // <ToggleButton/>
//     // {/* <section>
//     //   <Todo/>
//     // </section> */}
//     //<StateChange/>
//     // {/* <ShortCircuitEval/> */}
//     // {/* <Parent/> */}
//     // {/* <Registration/> */}
//     // <Login/>
//     //<ReactUseEffect/>
//     //<UseEffectChallenge/>
//     //<CleanUp/>
//     //  <div style={{backgroundColor:"black"}}>
//     //  <H1>आम्ही सातपुते❤️✨</H1>
//     // <ProfileCard/>
//     // </div>
//     // <FetchApi2 />
//   )
// };
// export default App;

import "./index.css";
import Name from "./Hooks/ContextApi/Name";
import ContextData from "./Hooks/ContextApi/ContextData";
import { Theme, ThemeContextProvider } from "./Hooks/ContextApi/ThemeContext";
import Reducer from "./Hooks/UseReducer/Reducer";
import Reducer1 from "./Hooks/UseReducer/Reducer1";
import Reducer2 from "./Hooks/UseReducer/Reducer2";
import Reducer3 from "./Hooks/UseReducer/Reducer3";
import UseReducer3 from "./Hooks/UseReducer/UseReducer3";
import BestPractice from "./Hooks/UseReducer/BestPractice";
function App() {
  return (
    <>
      {/* <Demo/> */}
      {/* <Count/> */}
      {/* <UseId/> */}
      {/* <ContextProvider>
     <Index/>
     <Name/>
    </ContextProvider> */}

      {/* <ContextProvider>
        <ContextData />
      </ContextProvider> */}

      {/* <ThemeContextProvider>
        <Theme/>
      </ThemeContextProvider> */}
      {/* <Reducer />
      <Reducer1 />
      <Reducer2 />
      <UseReducer3/> */}
      {/* <BestPractice/> */}
      <Reducer3/>
    </>
  );
}

export default App;
