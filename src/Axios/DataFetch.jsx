import { useEffect, useState } from "react";
import axios from "axios";

function DataFetch() {
  const api = "https://jsonplaceholder.typicode.com/todos";
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newData, setNewData] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleDelete = (id) => {
    axios
      .delete(`${api}/${id}`)
      .then(() => {
        setApiData(apiData.filter((item) => id !== item.id));
      })
      .catch((error) => setError(error));
  };

  // To add data
  const addTodo = (e) => {
    e.preventDefault();
    if (isEdit) {
      axios
        .put(`${api}/${editId}`, { title: newData, complete: false })
        .then((res) => {
          const updatedData = apiData.map((item) =>
            item.id === editId ? res.data : item
          );
          setApiData(updatedData);
          setIsEdit(false);
          setNewData("");
        })
        .catch((error) => setError(error)); // Error handling for PUT request
    } else {
      if (!newData.trim()) return;
      axios
        .post(api, {
          title: newData,
          complete: false,
        })
        .then((res) => {
          setApiData([...apiData, res.data]);
          setNewData("");
          setIsLoading(false); // Set loading to false after adding data
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false); // Set loading to false on error
        });
    }
  };

  const handleDeleteAll = () => {
    setApiData([]);
  };

  const handleUpdate = (id) => {
    setIsEdit(true);
    setEditId(id);
    const itemToEdit = apiData.find((item) => item.id === id);
    setNewData(itemToEdit.title);
  };

  // Fetch data
  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setApiData(res.data);
        setIsLoading(false);
      })
      .catch((error) => setError(error));
  }, []);

  if (isLoading) {
    return <h1>Loading......</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      <h1>API Data</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newData}
          onChange={(e) => setNewData(e.target.value)}
        />
        <button type="submit">Add</button>
        <button type="button" onClick={handleDeleteAll}>
          Delete All
        </button>
      </form>

      <hr />
      {apiData.map((curElem) => {
        return (
          <div key={curElem.id}>
            <h2>Title: {curElem.title}</h2>
            <h2>User ID: {curElem.userId}</h2>
            <button onClick={() => handleDelete(curElem.id)}>Delete</button>
            <button onClick={() => handleUpdate(curElem.id)}>Update</button>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default DataFetch;
