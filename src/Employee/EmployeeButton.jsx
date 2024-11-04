/* eslint-disable react/prop-types */

import Button from "react-bootstrap/Button";

function EmployeeButton({ handleEdit, handleRemove, item }) {
  return (
    <div>
      <Button variant="danger" onClick={() => handleRemove(item.empId)}>
        Remove
      </Button>{" "}
      <Button variant="warning" onClick={() => handleEdit(item.id)}>
        Edit
      </Button>{" "}
    </div>
  );
}

export default EmployeeButton;
