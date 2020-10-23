import React from 'react';
import './make-appoinments.css';
import { Nav, Navbar,Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
const makeappoinments=()=>{
    return (
        <div className="mainn">
             <h1>ATHENA GROUPS <span>🏥</span>  </h1>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Smart-Hospital</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#medicalhistory">Medical history </Nav.Link>
            <Nav.Link href="#cprescription">Current Prescription</Nav.Link>
          </Nav>
          <Nav>
          <Link to='/user_home'><Button variant="dark" >Home</Button></Link>
   <Link to='/'><Button variant="dark" >Log out</Button></Link>
    </Nav> 
        </Navbar.Collapse>
        </Navbar>
        <div className="steal">
    <h1>Appoinments</h1>
    <br>
    </br>
    <br></br>
    <h4> Describe the health issue you are facing so that we can appoint you to a specialised doctor.</h4>
    <br></br>
    <textarea name="message" rows="5" cols="30"></textarea>
    <br></br>
    <h4>Choose a preferred date:</h4>
    <br></br>
    <input type="date"></input>
    <br></br>
    <br></br>
    <h4>Choose a preferred time:</h4>
    <br></br>
    <input type="time"></input>
    <br></br>
    <br>
    </br>
    <br></br>
    <Button variant="dark" >Set appoinment</Button>
    </div>
  </div>
    )
}
export default makeappoinments;