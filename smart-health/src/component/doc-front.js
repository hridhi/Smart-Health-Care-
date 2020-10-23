import React from "react";
import './doc-front.css';
import { Link } from 'react-router-dom';
import { Nav, Navbar,Button ,Table} from "react-bootstrap";
import image from "./download.png";
const doc_front=()=>{
    return(
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Brand href="#home">Smart-Hospital</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link href="/medical-history">View patient details</Nav.Link>
    <Nav.Link href="/write-prescription">Write prescription</Nav.Link>
    <Nav.Link href="/viewtest">View test reports</Nav.Link>
  </Nav>
  <Nav>
 <Link to='/'><Button variant="dark" >Log out</Button></Link>
  </Nav>
</Navbar.Collapse>
</Navbar>
  <div className="image">
      <img src={image} alt="hello"></img>
        <p>
          Name: Florence Nitingale <br></br>
          Phone number: 938478670 <br></br>
          Address: Amrita school of engineering , ettimadai.<br></br>
          city : coimbatore<br></br>
          pincode : 641010<br></br>
          state : Tamil Nadu
        </p>
        </div>
        <div className='you'>
        <h2>Appoinments</h2>
    <Table striped bordered hover className="table">
  <thead>
    <tr>
      <th>S.no</th>
      <th>Patient name</th>
      <th>Appointment date</th>
      <th>Appointment time</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>20-3-2020</td>
      <td>8:30</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>20-3-2020</td>
      <td>9:30</td>
      <td>In progress</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Sneha</td>
      <td>20-3-2020</td>
      <td>11:30</td>
      <td>Pending</td>
    </tr>
  </tbody>
</Table> 
</div>
</div>
    )
}
export default doc_front;