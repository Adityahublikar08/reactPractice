import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { StudentContext } from "../context/StudentContext";

import { v4 as uuidv4 } from "uuid";
const entries = [
  {
    id: uuidv4(),
    name: "Alice Johnson",
    course: "Computer Science",
    rollNo: "CS2023-001",
    phone: "555-1234",
    address: "123 Maple St, Springfield",
  },
  {
    id: uuidv4(),
    name: "Bob Smith",
    course: "Mathematics",
    rollNo: "MATH2023-002",
    phone: "555-5678",
    address: "456 Oak St, Springfield",
  },
  {
    id: uuidv4(),
    name: "Charlie Brown",
    course: "Physics",
    rollNo: "PHY2023-003",
    phone: "555-8765",
    address: "789 Pine St, Springfield",
  },
  {
    id: uuidv4(),
    name: "Daisy Miller",
    course: "Chemistry",
    rollNo: "CHEM2023-004",
    phone: "555-4321",
    address: "101 Birch St, Springfield",
  },
  {
    id: uuidv4(),
    name: "Ethan Hunt",
    course: "Biology",
    rollNo: "BIO2023-005",
    phone: "555-1357",
    address: "202 Cedar St, Springfield",
  },
];

function Student() {
  const [studnets, setStudnets] = useState(entries);
  const { azad, azad1 } = useContext(StudentContext);
  const [form1, setForm] = useState({
    id: "",
    name: "",
    course: "",
    rollNo: "",
    phone: "",
    address: "",
  });
  const [isEditing, setIsEditing] = useState(false);


  const handleRemove = (id) => {
    const newStudent = studnets.filter((item) => !(item.id == id));
    setStudnets(newStudent);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form1, [name]: value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (
      !form1.name ||
      !form1.course ||
      !form1.rollNo ||
      !form1.address ||
      !form1.phone
    )
      return;
    // if (isEditing) {
    //   const updatedData = [...studnets];
    //   updatedData[editIndex] = form1;
    //   setStudnets(updatedData);
    //   setIsEditing(false);
    //   setForm({
    //     name: "",
    //     course: "",
    //     rollNo: "",
    //     phone: "",
    //     address: "",
    //   });
    //   setEditIndex(null);
    // }
    if (isEditing) {
      const updatedData = studnets.map((item) =>
        item.id === form1.id ? { ...form1 } : item
      );
      setStudnets(updatedData);
      setIsEditing(false);
      setForm({
        id: "",
        name: "",
        course: "",
        rollNo: "",
        phone: "",
        address: "",
      });
      setEditIndex(null);
    } else {
      setStudnets([...studnets, { ...form1, id: uuidv4() }]);
      setForm({
        id: "",
        name: "",
        course: "",
        rollNo: "",
        phone: "",
        address: "",
      });
    }
  };
  const handleClearButton = () => {
    setStudnets([]);
  };
  console.log(studnets);

  // const handleEdit = (index) => {
  //   setIsEditing(true);
  //   setEditIndex(index);
  //   setForm(studnets[index]);
  // };
  const handleEdit = (id) => {
    setIsEditing(true);
    // setEditIndex(index);
    const temp = studnets.find((item) => item.id === id);
    setForm(temp);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Form onSubmit={handleAdd}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="name"
              name="name"
              value={form1.name}
              onChange={(e) => handleInput(e)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Rollno</Form.Label>
            <Form.Control
              type="text"
              placeholder="1234"
              name="rollNo"
              value={form1.rollNo}
              onChange={(e) => handleInput(e)}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Course</Form.Label>
          <Form.Control
            placeholder="Pune"
            type="text"
            name="course"
            value={form1.course}
            onChange={(e) => handleInput(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address </Form.Label>
          <Form.Control
            placeholder="Apartment, studio, or floor"
            name="address"
            value={form1.address}
            onChange={(e) => handleInput(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>PhoneNo </Form.Label>
          <Form.Control
            placeholder="8208343542"
            name="phone"
            value={form1.phone}
            onChange={(e) => handleInput(e)}
          />
        </Form.Group>

        <div style={{ display: "flex", gap: "20px" }}>
          <Button variant="primary" type="submit">
            Add {azad}
            {azad1}
          </Button>
          <Button variant="primary" onClick={handleClearButton}>
            Delete All
          </Button>
        </div>
      </Form>

      <div
        style={{
          display: "grid",
          gridColumn: "repeat(3,1fr)",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
        }}
      >
        {studnets.map((item) => {
          return (
            <div
              key={item.id}
              className="container"
              style={{ border: "1px solid black " }}
            >
              <div className="card">
                <div className="card-header">Name: {item.name}</div>
                <div className="card-header">Id: {item.id}</div>
                <div className="card-body">
                  <h5 className="card-title">Course : {item.course}</h5>
                  <p className="card-text">Roll No : {item.rollNo}</p>
                  <p className="card-text">Ph.no : {item.phone}</p>
                  <h5 className="card-title">Address : {item.address}</h5>

                  <div style={{ display: "flex", gap: "20px" }}>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleRemove(item.id)}
                    >
                      remove
                    </button>
                    {/* <button
                      className="btn btn-primary"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button> */}
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Student;

// function Student() {
//   const a = uuidv4();
//   const b = uuidv4();
//   return (
//     <div>
//       <p> {a}</p>
//       <p> {b}</p>
//     </div>
//   );
// }

// export default Student;
