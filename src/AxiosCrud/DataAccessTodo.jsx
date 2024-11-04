import  { useEffect, useState } from "react";
import axios from "axios";

function DataAccessTodo() {
  const api = "https://jsonplaceholder.typicode.com/todos";
  const [apiData, setApiData] = useState([]);
  const [newData, setNewData] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(api);
        setApiData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTodos();
  }, []);

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${api}/${id}`);
      setApiData(apiData.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo = async () => {
    try {
      const res = await axios.post(api, {
        title: newData,
        completed: false,
      });
      setApiData([res.data, ...apiData]);
      setNewData("");
    } catch (error) {
      console.log(error);
    }
  };

  const updateTodo = async (id,index) => {
    try {
      setNewData(apiData[index].title);
      const res = await axios.put(`${api}/${id}`,{
        title: newData,
        completed: false
      })
      console.log(res)
      setApiData(apiData.map((item) => (item.id === id ? res.data : item)));
   
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Data</h1>
      <hr />
      <input
        type="text"
        value={newData}
        onChange={(e) => setNewData(e.target.value)}
      />
      <button onClick={addTodo}>add</button>

      <hr />
      {apiData.map((item,index) => {
        return (
          <div key={item.id}>
            <h1>Id:{item.id}</h1>
            <p>title:{item.title}</p>
            <p>Completed:{item.completed.toString()}</p>
            <button onClick={() => deleteTodo(item.id)}>delete</button>
            <button onClick={() => updateTodo(item.id,index)}>update</button>
          </div>
        );
      })}
    </div>
  );
}

export default DataAccessTodo;
