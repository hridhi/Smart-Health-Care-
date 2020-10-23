import React, { Component } from 'react';
import { Nav, Navbar,Button } from "react-bootstrap";
import image from "./download.png";
import './user_home.css';
import Calendar from 'react-calendar';
import { Document, Page } from 'react-pdf';
import { Link } from 'react-router-dom';
const userhome=()=>{
    return (
      <div className="boddy">
           <h1>ATHENA GROUPS <span>🏥</span>  </h1>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Smart-Hospital</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#medicalhistory">Medical history </Nav.Link>
          <Nav.Link href="#cprescription">Current Prescription</Nav.Link>
          <Nav.Link href="#cprescription">View test reports</Nav.Link>
          <Nav.Link href="#cprescription">Bills</Nav.Link>
        </Nav>
        <Nav>
        <Link to='/user_front'><Button variant="dark" >Update your details</Button></Link>
 <Link to='/'><Button variant="dark" >Log out</Button></Link>
  </Nav> 
      </Navbar.Collapse>
      </Navbar>

      <div className="image">
        <img src={image} alt="hello"></img>
          <p>
            Name: Nishita  <br></br>
            Phone number: 938478670 <br></br>
            Address: Amrita school of engineering , ettimadai.<br></br>
            city : coimbatore<br></br>
            pincode : 641010<br></br>
            state : tamil nadu
          </p>
        </div>
        <div className="calender">
        <Calendar activeMonth={new Date()} />
        <br></br>
        <br></br>
        <Link to='/make-appoinment'><Button variant="dark" >Make appoinment</Button></Link>
      </div>
      </div>
    );
  }
export default userhome;