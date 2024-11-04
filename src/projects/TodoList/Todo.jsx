import { useState } from "react";

import TodoForm from "./TodoForm"; //to access fform
import TodoList from "./TodoList"; //to show data array
import DateTime from "./DateTime"; //to show date and time

const todokey = "reactTodo";
export const Todo = () => {
  const [task, setTask] = useState(() => {
    const todos = localStorage.getItem(todokey);//get data from localstorage in string format
    if (!todos) return []; //in todos if there is no any data initialized task with empty array

    return JSON.parse(todos); //if there is data already in localstorage return it task as string format means initilized with string data stored in loalstorage
  }); //to store task in array

  const change = () => {
    setTask([]);
  }; //final clear task button means change all

  const handleDelete = (value) => {
    // console.log(task);
    // console.log(value);
    const setUpdatedTask = task.filter((curTask) => curTask !== value); //when curTask == value tyala false karnar
    setTask(setUpdatedTask);
  };

  //validations on input
  const handleSubmit = (input) => {
    if (!input) return; //if input is empty dont store any just return

    if (task.includes(input)) {
      //setInput("")
      return;
    } //take care user cant add same item again

    setTask((prevTask) => [...prevTask, input]); //to add new values and store prev values as it is
  };

  //to add data in locastorage
  localStorage.setItem(todokey, JSON.stringify(task)); //dat should be always i string format so use this JSON.stringify()

  return (
    <section className="todo-container">
      <header>
        <h1>Todo list</h1>
        <DateTime />
        {/*component 1*/}
      </header>
      <TodoForm onAddTodo={handleSubmit} />
      {/* Component 2*/}
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask, index) => {
            return (
              <>
                <TodoList
                  key={index}
                  data={curTask}
                  onHandleDelete={handleDelete}
                />
                {/*component 3*/}
              </>
            );
          })}
          <button
            style={{
              backgroundColor: "orangeRed",
              color: "white",
              padding: "20px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontFamily: "sans-serif",
              fontWeight: "bold",
              position: "relative",
              left: "190px",
            }}
            onClick={change}
          >
            change
          </button>
        </ul>
      </section>
    </section>
  );
};
