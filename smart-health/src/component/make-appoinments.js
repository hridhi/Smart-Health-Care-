import React from 'react';
import './make-appoinments.css';
import { Nav, Navbar,Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from 'axios';
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
    
    <form id="myForm" onSubmit={(e)=>submit_appointment(e)}>
    <br>
    </br>
    <br></br>
    <h4> (required *)</h4>
    <br></br>
    <h4> Describe the health issue you are facing so that we can appoint you to a specialised doctor *.</h4>
    <br></br>
    <textarea id="desp" name="message" rows="5" cols="30" required></textarea>
    <br></br>
    <h4>Choose a preferred date *:</h4>
    <br></br>
    <input id="date" type="date" required></input>
    <br></br>
    <br></br>
    <h4>Choose a preferred time *:</h4>
    <br></br>
    <input id="time" type="time" required></input>
    <br></br>
    <h4>patient id</h4>
    <br></br>
    <input id="pid4" type="text" name="name" />
    <br></br>
    <br></br>
    <h4>branch id</h4>
    <br></br>
    <input id="br_id" type="text" name="name" />
    <br></br>
    <br></br>
    <Button type="submit" variant="dark" id="submit" className='box1inp'>Set appoinment</Button>
    </form>
    </div>
  </div>
  
    )
}


function submit_appointment(e){
  e.preventDefault();
  let request =  {
      desp:document.getElementById('desp').value,
      date:document.getElementById('date').value,
      time:document.getElementById('time').value,
      pid4:document.getElementById('pid4').value,
      br_id:document.getElementById('br_id').value
  }
  axios.post('http://localhost:3001/make-appoinment',request)//incomplete
  .then(resp=>{
    alert(resp.data.message);
  })
  .catch(err=>{
    console.log(err);
  })
}
export default makeappoinments;