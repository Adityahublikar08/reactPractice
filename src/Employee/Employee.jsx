import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";

const employees = [
  {
    id: uuidv4(),
    name: "John Doe",
    empId: "EMP001",
    department: "HR",
    sal: "50000",
    designation: "Manager",
  },
  {
    id: uuidv4(),
    name: "Jane Smith",
    empId: "EMP002",
    department: "Finance",
    sal: "60000",
    designation: "Accountant",
  },
  {
    id: uuidv4(),
    name: "Raj Kumar",
    empId: "EMP003",
    department: "Development",
    sal: "70000",
    designation: "Software Engineer",
  },
  {
    id: uuidv4(),
    name: "Emily Davis",
    empId: "EMP004",
    department: "Marketing",
    sal: "55000",
    designation: "Marketing Executive",
  },
  {
    id: uuidv4(),
    name: "Mike Johnson",
    empId: "EMP005",
    department: "Sales",
    sal: "48000",
    designation: "Sales Representative",
  },
];

function Employee() {
  const [data, setData] = useState(employees);
  const [newData, setNewdata] = useState({
    name: "",
    empId: "",
    department: "",
    sal: "",
    designation: "",
  });
  const [isEdit, setIsEdit] = useState(false);

  const handleNewData = (e) => {
    const { name, value } = e.target;
    setNewdata({ ...newData, [name]: value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (
      !newData.name ||
      !newData.department ||
      !newData.designation ||
      !newData.sal ||
      !newData.empId
    )
      return;
    else {
      if (isEdit) {
        const update = data.map((item) =>
          item.id === newData.id ? { ...newData } : item
        );
        setData(update);
        setIsEdit(false);
        setNewdata({
          id: "",
          name: "",
          empId: "",
          department: "",
          sal: "",
          designation: "",
        });
      } else {
        const isDuplicate = data.some(
          (employee) => employee.empId === newData.empId
        );
        if (isDuplicate) {
          alert("Employee with this ID already exists!");
          return;
        }
        setData([...data, { ...newData, id: uuidv4() }]);
        setNewdata({
          id: "",
          name: "",
          empId: "",
          department: "",
          sal: "",
          designation: "",
        });
      }
    }
  };

  const handleRemove = (index) => {
    const temp = data.filter((item) => item.empId !== index);
    setData(temp);
  };
  const handleDeleteAll = () => {
    setData([]);
  };

  const handleEdit = (item1) => {
    // setIsEdit(true);
    // setEditIndex(item);
    // setNewdata(data[item]);
    setIsEdit(true);
    const temp = data.find((item) => item.id === item1);
    setNewdata(temp);
  };

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "2px 2px 2px gray",
        gap: "30px",
        fontWeight: "600",
        backgroundImage: "url(emp.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Employee Details</h1>
      <hr />
      {/*form*/}
      <EmployeeForm
        newData={newData}
        handleNewData={handleNewData}
        handleAdd={handleAdd}
        handleDeleteAll={handleDeleteAll}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gridTemplateRows: "repeat(2,1fr)",
          gap: "30px",
        }}
      >
        {data.map((item, index) => {
          return (
            <EmployeeList
              item={item}
              key={index}
              handleRemove={handleRemove}
              handleEdit={handleEdit}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Employee;
