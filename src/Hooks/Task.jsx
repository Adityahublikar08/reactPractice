// import React, { useState } from "react";

// export default function Task() {
//   let todoList = ["exercise","HomeWork"
//   ];

//   const handleClick = () => {
//     setCount(count + 1);
//     todoList[count] = todo;
//   };

//   let todo;
//   const [count, setCount] = useState("");

//   return (
//     <div>
//       {todo}=<input type="text" />
//       <button onClick={handleClick}>Add</button>
//       <h1>TodoList</h1>
//      <ul>
//      {
//         todoList.map((item) => {
//             return(
//                 <li key={item}>
//                     {item}
//                 </li>
//             )

        
//       })
//     }
//     </ul>
//     </div>
      
// ); 
 

// }

import React, { useState } from "react";

export default function Task() {
  // Initialize the todoList using useState
  const [todoList, setTodoList] = useState(["exercise", "HomeWork"]);
  const [todo, setTodo] = useState("");

  // Handle the click event to add a new task
  const handleClick = () => {
    if (todo.trim()) {
      setTodoList([...todoList, todo]); // Add new task to the todoList
      setTodo(""); // Clear the input field
    }
  };

  return (
    <div>
      {/* Controlled input for adding new todos */}
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)} // Update todo state on input change
      />
      <button onClick={handleClick}>Add</button>

      <h1>Todo List</h1>
      <ul>
        {/* Map through todoList to render each todo */}
        {todoList.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}



