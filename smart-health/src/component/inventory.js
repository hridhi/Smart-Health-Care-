import React from "react";
import "./inventory.css";
import { Button,Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
const inventory=()=>{
    return(
        <div className="thisisit">
          <Link to ="/staff-front"><Button className="homee">Home</Button></Link>
        <div className="start">
            <h5>Branch ID</h5>
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
      <th>Equipment name</th>
      <th>Quantity</th>
      <th>Availability</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>syringe</td>
      <td>20</td>
      <td>available</td>
    </tr>
    <tr>
      <td>2</td>
      <td>x-ray</td>
      <td>4</td>
      <td>unavailable</td>
    </tr>
    <tr>
      <td>3</td>
      <td>ultrasonography</td>
      <td>2</td>
      <td>available</td>
    </tr>
    <tr>
      <td>4</td>
      <td>CT scan</td>
      <td>1</td>
      <td>unavailable</td>
    </tr>
    <tr>
      <td>5</td>
      <td>test tubes</td>
      <td>300</td>
      <td>available</td>
    </tr>
  </tbody>
</Table> 
            </div>
            </div>
    )}
export default inventory;