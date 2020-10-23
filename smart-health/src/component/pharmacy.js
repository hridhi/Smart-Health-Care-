import React from "react";
import { Button,Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
const pharmacy=()=>{
    return(
        <div className="thisisit">
           <Link to ="/staff-front"><Button className="homee">Home</Button></Link>
        <div className="start">
            <h5>Enter Medicine ID</h5>
            <input value="2346576"></input>
            <Button>Enter</Button>
            <br></br>
            <br></br>
            <h5>Enter Branch ID</h5>
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
      <th>Medicine ID</th>
      <th>Medicine name</th>
      <th>Availability</th>
      <th>Category</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>1578</td>
      <td>Ampicillin</td>
      <td>available</td>
      <td>Bacterial infections</td>
      <td>$59</td>
    </tr>
    <tr>
      <td>2</td>
      <td>1286</td>
      <td>Crocin</td>
      <td>unavailable</td>
      <td>headache</td>
      <td>$29</td>
    </tr>
    <tr>
      <td>3</td>
      <td>1568</td>
      <td>Nise</td>
      <td>available</td>
      <td>Body pains</td>
      <td>$23</td>
    </tr>
    <tr>
      <td>4</td>
      <td>1123</td>
      <td>dolo65</td>
      <td>available</td>
      <td>fever</td>
      <td>$10</td>
    </tr>
    <tr>
      <td>5</td>
      <td>1679</td>
      <td>dsr</td>
      <td>available</td>
      <td>diabetes</td>
      <td>$20</td>
    </tr>
  </tbody>
</Table> 
            </div>
            </div>
    )}
export default pharmacy;