import axios from "axios";
import { useEffect, useState } from "react";

function DataAcccess2() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState({ body: "", title: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log("Fetched Data:", res.data); // Log the fetched data
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Fetch Error:", error); // Log the error
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    console.log("Deleting item with id:", id); // Log the ID of the item to delete
    axios
      .delete(`${url}/${id}`)
      .then(() => {
        setData(data.filter((item) => item.id !== id)); // Filter out the deleted item
      })
      .catch((error) => {
        console.error("Delete Error:", error); // Log the error
        setError(error);
      });
  };

  const handleNewData = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const handleAddData = (e) => {
    e.preventDefault();
    if (!newData.title.trim() || !newData.body.trim()) return;

    if (isEdit) {
      axios
        .put(`${url}/${editId}`, newData)
        .then((res) => {
          const updatedData = data.map(
            (item) => (item.id === editId ? res.data : item) // Corrected to return updated item
          );
          setData(updatedData);
          setNewData({ body: "", title: "" }); // Clear form
          setIsEdit(false); // Reset editing state
          setEditId(null); // Reset edit ID
        })
        .catch((error) => {
          console.error("Update Error:", error); // Log the error
          setError(error);
        });
    } else {
      axios
        .post(url, newData)
        .then((res) => {
          setData([...data, res.data]);
          setNewData({ body: "", title: "" });
        })
        .catch((error) => {
          console.error("Add Error:", error); // Log the error
          setError(error);
        });
    }
  };

  const handleUpdate = (id, index) => {
    setIsEdit(true);
    setEditId(id);
    setNewData(data[index]);
  };

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  console.log("Current Data:", data); // Log the current data in the render

  return (
    <div>
      <form onSubmit={handleAddData}>
        Title:{" "}
        <input
          type="text"
          name="title"
          value={newData.title}
          onChange={handleNewData}
        />
        Body:{" "}
        <input
          type="text"
          name="body"
          value={newData.body}
          onChange={handleNewData}
        />
        <button>{isEdit ? "Update Data" : "Add Data"}</button>
      </form>
      <hr />
      <h1>Fetch Data</h1>
      {data.map((item, index) => {
        return (
          <ul
            key={item.id}
            style={{
              border: "2px solid black",
              margin: "20px",
             
            }}
          >
            <li>Title: {item.title}</li>
            <li>Body: {item.body}</li>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <button onClick={() => handleUpdate(item.id, index)}>Update</button>
          </ul>
        );
      })}
    </div>
  );
}

export default DataAcccess2;
