import axios from "axios";
import { useEffect, useState } from "react";

function DataAccess() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState({ name: "", username: "", phone: "" });
  const [editId, setEditId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  //api link
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })

      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  //handleNewData
  const handleNewData = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  //handleAddData
  const handleAddData = (e) => {
    e.preventDefault();
    if (
      !newData.name.trim() ||
      !newData.username.trim() ||
      !newData.phone.trim()
    )
      return;
    if (isEdit) {
      axios
        .put(`${url}/${editId}`, newData)
        .then((res) => {
          // console.log(res)
          const updatedData = data.map((item) =>
            item.id === editId ? res.data : item
          );
          setData(updatedData);
          setIsEdit(false);
          setNewData({ name: "", username: "", phone: "" });
        })
        .catch((error) => setError(error));
    } else {
      axios
        .post(url, newData)
        .then((res) => {
          // console.log(res)
          setData([...data, res.data]);
          setNewData({
            name: "",
            username: "",
            phone: "",
          });
        })
        .catch((error) => setError(error));
    }
  };

  //handleDelete
  const handleDelete = (id) => {
    axios
      .delete(`${url}/${id}`)
      .then((res) => {
        console.log(res, "delete");
        setData(data.filter((item) => id !== item.id));
      })
      .catch((error) => {
        setError(error);
      });
  };

  //handleDeleteAll
  const handleDeleteAll = () => {
    setData([]);
  };

  //handleEdit
  const handleEditButton = (id, index) => {
    setIsEdit(true);
    setEditId(id);
    setNewData(data[index]);
  };
  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      <h1>ApiData</h1>

      <form
        onSubmit={(e) => handleAddData(e)}
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <label>name:</label>
        <input
          type="text"
          name="name"
          value={newData.name}
          onChange={(e) => handleNewData(e)}
        />
        <label>username:</label>
        <input
          type="text"
          name="username"
          value={newData.username}
          onChange={(e) => handleNewData(e)}
        />
        <label>phone:</label>
        <input
          type="tel"
          name="phone"
          value={newData.phone}
          onChange={(e) => handleNewData(e)}
        />
        <button type="submit">Add</button>
        <button onClick={handleDeleteAll}>Delete All</button>
      </form>
      <hr />
      {data.map((item, index) => {
        return (
          <div key={item.id}>
            <ul style={{ border: "2px solid black" }}>
              <li>name: {item.id}</li>
              <li>userName: {item.username}</li>
              <li>phone: {item.phone}</li>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
              <button onClick={() => handleEditButton(item.id, index)}>
                Update
              </button>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default DataAccess;
