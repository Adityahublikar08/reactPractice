/* eslint-disable react/prop-types */

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { EmployeeContext } from "./EmployeeContext";
import Row from "react-bootstrap/Row";
import { useContext } from "react";
function EmployeeForm({handleAdd,handleNewData,handleDeleteAll,newData}) {
  const {name}=useContext(EmployeeContext);
  return (
    
    <div>
        <h1>{name}</h1>
              <Form onSubmit={handleAdd}>
              
        <Row className="mb-3">
          <Form.Group
            as={Col}
            controlId="formGridEmail"
            style={{ color: "whitesmoke" }}
          >
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              value={newData.name}
              onChange={(e) => handleNewData(e)}
            />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridPassword"
            style={{ color: "whitesmoke" }}
          >
            <Form.Label>Emp ID</Form.Label>
            <Form.Control
              placeholder="Emp001"
              type="text"
              name="empId"
              value={newData.empId}
              onChange={(e) => handleNewData(e)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group
            as={Col}
            controlId="formGridState"
            style={{ color: "whitesmoke" }}
          >
            <Form.Label>Department</Form.Label>
            <Form.Select
              name="department"
              value={newData.department}
              onChange={(e) => handleNewData(e)}
            >
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Law">Law department</option>
              <option value="Development">Development</option>
              <option value="Testing">Testing</option>
              <option value="R&D">R&D</option>
              <option value="Sales">Sales</option>
              <option value="Marketing">Marketing</option>
            </Form.Select>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formGridAddress1"
            style={{ color: "whitesmoke" }}
          >
            <Form.Label>Designation</Form.Label>
            <Form.Control
              placeholder="Manager"
              type="text"
              name="designation"
              value={newData.designation}
              onChange={(e) => handleNewData(e)}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formGridAddress2"
            style={{ color: "whitesmoke" }}
          >
            <Form.Label>Salary</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Salary"
              name="sal"
              value={newData.sal}
              onChange={(e) => handleNewData(e)}
            />
          </Form.Group>
        </Row>

        <div style={{ display: "flex", gap: "20px" }}>
          <Button variant="success" type="submit">
            Submit
          </Button>
          <Button variant="danger" onClick={handleDeleteAll}>
            Delete All
          </Button>
        </div>
      </Form>
      
    </div>
  )
}

export default EmployeeForm
