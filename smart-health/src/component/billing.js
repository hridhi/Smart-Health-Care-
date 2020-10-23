import React from "react";
import { Button,Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
const billing=()=>{
    return(
        <div className="thisisit">
          <Link to ="/staff-front"><Button className="homee">Home</Button></Link>
        <div className="start">
            <h5>Enter Patient ID</h5>
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
      <th>Payment Date</th>
      <th>Bill number</th>
      <th>Amount</th>
      <th>Mode of payment</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>20-10-01</td>
      <td>69123490</td>
      <td>1000</td>
      <td>cash</td>
      <td>paid</td>
    </tr>
    <tr>
      <td>2</td>
      <td>20-02-29</td>
      <td>69342566</td>
      <td>200</td>
      <td>cash</td>
      <td>paid</td>
    </tr>
    <tr>
      <td>3</td>
      <td>20-09-30</td>
      <td>68274925</td>
      <td>500</td>
      <td>none</td>
      <td>pending</td>
    </tr>
    <tr>
      <td>4</td>
      <td>20-04-25</td>
      <td>60998324</td>
      <td>200</td>
      <td>credit card</td>
      <td>paid</td>
    </tr>
    <tr>
      <td>5</td>
      <td>20-09-29</td>
      <td>61234991</td>
      <td>400</td>
      <td>none</td>
      <td>Pending</td>
    </tr>
  </tbody>
</Table> 
            </div>
            </div>
    )}
export default billing;