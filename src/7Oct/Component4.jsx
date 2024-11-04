import { useState } from "react";

function Component4() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState({
    name1: "",
    email: "",
    tel: "",
    addr: "",
    country: "india",
  });
  const [editIndex, setEditIndex] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };
  const handleAdd = (e) => {
    e.preventDefault();
    if (!newData.name1 || !newData.email || !newData.tel || !newData.addr)
      return;
    if (isEdit) {
      const editData = [...data];

      editData[editIndex] = newData;
      setData(editData);
      setIsEdit(false);
      setNewData({ name1: "", email: "", tel: "", addr: "" });
    } else {
      setData([...data, newData]);
      setNewData({ name1: "", email: "", tel: "", addr: "" });
    }
  };
  const handleRemove = (param) => {
    const removedData = data.filter((item, index) => index !== param);
    setData(removedData);
  };
  const handleClearData = () => {
    setData([]);
  };

  const handleUpdate = (param) => {
    setEditIndex(param);

    setIsEdit(true);
    setNewData(data[param]);
  };

 


  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        gap: "30px",
        boxShadow: "3px 3px 2px black",
        padding: "30px",
        backgroundImage:
          " linear-gradient( 109.6deg,  rgba(254,253,205,1) 11.2%, rgba(163,230,255,1) 91.1% )",
      }}
    >
      <form
        onSubmit={handleAdd}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: "20px",
          border: "2px solid black",
          height: "100%",
          width: "600px",
          textAlign: "left",
          fontSize: "20px",
          backgroundImage:
            "linear-gradient( 68.6deg,  rgba(79,183,131,1) 14.4%, rgba(254,235,151,1) 92.7% )",
        }}
      >
        <label>Name</label>{" "}
        <input
          type="text"
          value={newData.name1}
          name="name1"
          onChange={handleInput}
          placeholder="enter name"
          maxLength={20}
          minLength={5}
          style={{ padding: "10px" }}
        />
        <br />
        <label>Email</label>{" "}
        <input
          type="email"
          value={newData.email}
          name="email"
          onChange={handleInput}
          placeholder="enter email "
          style={{ padding: "10px" }}
        />
        <br />
        <label>Phone no</label>
        <input
          type="tel"
          name="tel"
          value={newData.tel}
          onChange={handleInput}
          placeholder="enter phone no"
          maxLength={10}
          style={{ padding: "10px" }}
        />
        <br />
        <label>Address</label>
        <textarea
          name="addr"
          value={newData.addr}
          onChange={handleInput}
          placeholder="enter addres"
          maxLength={50}
          style={{ padding: "10px" }}
        ></textarea>
        <br />
        <label>Select country</label>
        <select
          style={{ padding: "10px" }}
          name="country"
          value={newData.country}
          onChange={handleInput}
        >
          <option value="india">India</option>
          <option value="america">America</option>
          <option value="russia">Russia</option>
          <option value="china">china</option>
        </select>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <button
            style={{
              backgroundImage:
                " linear-gradient( 109.6deg,  rgba(24,138,141,1) 11.2%, rgba(96,221,142,1) 91.1% )",
            }}
          >
            {" "}
            Add
          </button>
          <button
            style={{
              backgroundImage:
                " linear-gradient( 180.5deg,  rgba(46,255,171,1) 12.3%, rgba(252,251,222,0.46) 92% )",
            }}
            onClick={handleClearData}
          >
            Clear{" "}
          </button>
        </div>
      </form>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gridTemplateRows: "repeat(2,1fr)",
          gap: "30px",
        }}
      >
        {data.map((curElem, index) => {
          return (
            <div
              key={index}
              style={{
                height: "300px",
                width: "max-content",
                fontSize: "20px",
                boxShadow: "3px 3px 3px black",
                padding: "20px",
                fontWeight: "600",
                backgroundImage:
                  " linear-gradient( 92.7deg,  rgba(245,212,212,1) 8.5%, rgba(252,251,224,1) 90.2% )",
              }}
            >
              <h2>Name : {curElem.name1}</h2>
              <h2>email : {curElem.email}</h2>
              <h2>Phone : {curElem.tel}</h2>
              <h2>Address : {curElem.addr}</h2>
              <h2>Country : {curElem.country}</h2>
              <div style={{ display: "flex", gap: "30px", padding: "20px" }}>
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient( 97.3deg,  rgba(25,50,70,0.81) 10.7%, rgba(155,65,25,0.72) 39.5%, rgba(255,192,0,0.81) 69.7% )",
                  }}
                  onClick={() => handleRemove(index)}
                >
                  Remove
                </button>
                <button
                  style={{
                    backgroundImage:
                      " linear-gradient( 102.3deg,  rgba(147,39,143,1) 5.9%, rgba(234,172,232,1) 64%, rgba(246,219,245,1) 89% )",
                  }}
                  onClick={() => handleUpdate(index)}
                >
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Component4;
