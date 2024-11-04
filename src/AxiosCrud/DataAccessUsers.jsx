import React, { useEffect, useState } from "react";
import axios from "axios";

function DataAccessUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [newData, setNewData] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  // To differentiate between Add and Update mode
  const [isEditMode, setIsEditMode] = useState(false);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      setError(error);
    }
  };

  const addData = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        // Update existing user
        const res = await axios.put(`${url}/${newData.id}`, {
          name: newData.name,
          username: newData.username,
          email: newData.email,
          phone: newData.phone,
        });

        // Update the data state after updating the user
        setData(data.map((item) => (item.id === newData.id ? res.data : item)));
      } else {
        // Add new user
        const res = await axios.post(url, {
          name: newData.name,
          username: newData.username,
          email: newData.email,
          phone: newData.phone,
        });

        setData([res.data, ...data]);
      }

      // Reset form and switch to Add mode
      setNewData({
        id: "",
        name: "",
        username: "",
        email: "",
        phone: "",
      });
      setIsEditMode(false);
    } catch (error) {
      setError(error);
    }
  };

  const handleEdit = (index) => {
    // Populate form with data for editing
    setNewData(data[index]);
    setIsEditMode(true); // Set form to edit mode
  };

  const handleNewData = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      <h1>Data</h1>
      <hr />
      <form onSubmit={(e) => addData(e)}>
        <br />
        Enter name:{" "}
        <input
          type="text"
          name="name"
          value={newData.name}
          onChange={(e) => handleNewData(e)}
        />
        <br />
        Enter username:{" "}
        <input
          type="text"
          name="username"
          value={newData.username}
          onChange={(e) => handleNewData(e)}
        />
        <br />
        Enter email:{" "}
        <input
          type="email"
          name="email"
          value={newData.email}
          onChange={(e) => handleNewData(e)}
        />
        <br />
        Enter phone:{" "}
        <input
          type="tel"
          name="phone"
          value={newData.phone}
          onChange={(e) => handleNewData(e)}
        />
        <br />
        <button type="submit">{isEditMode ? "Update User" : "Add User"}</button>
      </form>
      <hr />
    <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gridTemplateRows:"repeat(2,1fr)",gap:"10px"}}>
    {data.map((item, index) => {
        return (
          <div key={item.id} style={{padding:'20px',border:"1px solid black"}}>
            <h1>Id: {item.id}</h1>
            <h2>Name: {item.name}</h2>
            <h2>Username: {item.username}</h2>
            <h2>Email: {item.email}</h2>
            <h2>Phone: {item.phone}</h2>
            <button onClick={() => deleteUser(item.id)}>Delete</button>
            <button onClick={() => handleEdit(index)}>Edit</button>
            
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default DataAccessUsers;
