import "./App.css";
import './index.css'
// import Componenet2 from "./7Oct/Componenet2";
// import Component1 from "./7Oct/Component1";
// import Component3 from "./7Oct/Component3";
// import FetchApi from "./TaskList1/FetchApi";
// import FormValidation from "./TaskList1/FormValidation";
// import MountAlert from "./TaskList1/MountAlert";
// import Resizer from "./TaskList1/Resizer";
// import UpdateTitle from "./TaskList1/UpdateTitle";
// import StudentContextProvider from "./context/StudentContext";
// import Weather from "./TaskList1/Weather";
// import Component4 from "./7Oct/Component4";
// import Student from "./Components/Student";
// import Employee from "./Employee/Employee";
// import Car from "./Car/Car";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./Car/Navbar";
// import Home from "./Car/Home";
// import Footer from "./Car/Footer";
// import { EmployeeContextProvider } from "./Employee/EmployeeContext";
// import  CarContextProvider  from "./Car/CarContext";
// import { ContextProvider } from './Context2/RandomContext'
// import Button from './Context2/Button';

// function App() {
//   return (
  
      

     
     
      
// <ContextProvider>
//   <Button/>
// </ContextProvider>


//   );
// }

// export default App;


// // function App() {
// //   return (
// //     <EmployeeContextProvider>
// //       <Employee />
// //     </EmployeeContextProvider>
// //   );
// // }




// import React from 'react'
// import CarContextProvider from './Car/CarContext'
// import Car from './Car/Car'
// import { Button } from 'react-bootstrap';
// function App() {
//   return (
//     <CarContextProvider>
//       <Car/>
//     </CarContextProvider>
//   )
// }

// export default App;



import Expense from './ExpenseTracker/Expense'
import {ExpenseContextProvider} from './ExpenseTracker/ExpenseContext'

function App() {
  return (
    <ExpenseContextProvider>
      <Expense/>
    </ExpenseContextProvider>
  )
}

export default App
