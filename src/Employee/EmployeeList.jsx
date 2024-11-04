/* eslint-disable react/prop-types */

import EmployeeButton from "./EmployeeButton";


function EmployeeList({ handleRemove, handleEdit, item }) {
  return (
    <div>
      <div
        style={{
          boxShadow: "2px 2px 2px whitesmoke",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          backgroundColor: "black",
          color: "whitesmoke",
        }}
      >
        <h2>Id: {item.empId}</h2>
        <hr />
        <h2> Name: {item.name}</h2>
        <h3>Department: {item.department}</h3>
        <h4>Designation: {item.designation}</h4>
        <div>
         <EmployeeButton item={item} handleEdit={handleEdit} handleRemove={handleRemove}/>
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;
