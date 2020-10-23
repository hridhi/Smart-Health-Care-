import React from "react";
import { Button,Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
const insurance=()=>{
    return(
        <div className="thisisit">
          <Link to ="/staff-front"><Button className="homee">Home</Button></Link>
        <div className="start">
            <h5>Patient ID</h5>
            <input value="2346576"></input>
            <Button>Enter</Button>
            <br></br>
            <br></br>
            </div>
            <div className="bill">
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>S.no</th>
      <th>Insurance ID</th>
      <th>Company</th>
      <th>Category</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>2345</td>
      <td>birla sun life</td>
      <td>platinum</td>
    </tr>
    <tr>
      <td>2</td>
      <td>2367</td>
      <td>India first life insurance</td>
      <td>gold</td>
    </tr>
    <tr>
      <td>3</td>
      <td>3389</td>
      <td>birla sun life</td>
      <td>silver</td>
    </tr>
    <tr>
      <td>4</td>
      <td>3276</td>
      <td>India first life insurance</td>
      <td>bronze</td>
    </tr>
    <tr>
      <td>5</td>
      <td>9167</td>
      <td>SBI life insurance</td>
      <td>platinum</td>
    </tr>
  </tbody>
</Table> 
            </div>
            </div>
    )}
export default insurance;