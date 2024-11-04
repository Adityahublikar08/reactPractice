import { useState } from "react";


function TodoForm({ onAddTodo }) {
  const [input, setInput] = useState(""); //to handle input
  const handleInput = (value) => {
    return setInput(value); //to get input value
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //prevent by default submit option,prevents the page from reloading after submission.
    onAddTodo(input);
    setInput(""); //after storing task to make ip clear
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            autoComplete="off"
            className="todo-input"
            value={input}
            onChange={(event) => {
              handleInput(event.target.value);
            }}
          />
        </div>
        <div>
          <button className="todo-btn" type="submit">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
}

export default TodoForm;
