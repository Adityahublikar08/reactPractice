import React, { useEffect, useState } from "react"
import axios from "axios";
function DataAccessAlbum() {
  const url = "https://jsonplaceholder.typicode.com/albums";
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setIsError] = useState(null);
  const [newData, setNewData] = useState({
    title: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url);
      setData(res.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      setIsError(error);
    }
  };

  const handleNewData = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEdit) {
      try {
        // Use await to ensure the request completes
        const res = await axios.put(`${url}/${editId}`, {
          title: newData.title,
          id: data.find(item => item.id === editId).id, // Correct the ID reference
          userId: data.find(item => item.id === editId).userId, // Correct the userId reference
        });
  
        // Use map instead of filter to correctly update the item in state
        setData(
          data.map((item) => (item.id === editId ? res.data : item))
        );
        
        // Reset form and editing mode
        setNewData({
          title: "",
        });
        setIsEdit(false);
      } catch (error) {
        setIsError(error);
      }
    } else {
      // Handle the add case
      try {
        const res = await axios.post(url, {
          title: newData.title,
          id: 101, // You may want to handle ID dynamically if possible
          userId: 11,
        });
        setData([res.data, ...data]);
        setNewData({
          title: "",
        });
      } catch (error) {
        setIsError(error);
      }
    }
  };
  

  const handleUpdate = (id, index) => {
    setIsEdit(true);
    setNewData(data[index]);
    setEditId(id);
  };
  if (isLoading) {
    return <h1>loading....</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} style={{margin:'10px'}}>
        <h2>enter input:</h2>
        <input
          type="text"
          name="title"
          value={newData.title}
          onChange={(e) => handleNewData(e)}
          style={{padding:'20px'}}placeholder="enter title"
        />
        <button type="submit"  style={{backgroundColor:"yellowgreen", marginLeft:'10px'}}>add</button>
      </form>
      {
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5,1fr)",
            gridTemplateRows: "repeat(20,1fr)",
            gap: "20px",
          }}
        >
          {data.map((item, index) => {
            return (
              <div
                key={item.id}
                style={{ textAlign: "center", border: "1px solid black" }}
              >
                <h1>id:{item.id}</h1>
                <h2>userId:{item.userId}</h2>
                <h2>title:{item.title}</h2>
                <div style={{display:"flex",justifyContent:"space-around"}}>
                <button onClick={() => handleDelete(item.id)} style={{backgroundColor:"orangeRed"}}>delete</button>
                <button onClick={() => handleUpdate(item.id, index)} style={{backgroundColor:"yellowgreen"}}>
                  update
                </button>
                </div>
              </div>
            );
          })}
        </div>
      }
    </div>
  );
}

export default DataAccessAlbum;
