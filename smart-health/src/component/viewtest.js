import React from 'react';
import "./inventory.css";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
  const uploadtest=()=>{
    return (
      <div className="thisisit">
      <div className="details">
        <Link to ="/staff-front"><Button className="home">Home</Button></Link>
        <h1>View test report</h1>
        <div className="start">
            <h5>Patient ID</h5>
            <input value="2346576"></input>
            <Button>Enter</Button>
            <br></br>
            <br></br>
            </div>
      <form>
            <br></br>
            <label>
            Test name
            <br></br>
            <p>TSH</p>
            </label>
            <br></br>
            <label>
            Test category
            <br></br>
            <p>Thyroid</p>
            </label>
            <br></br>
            <label>
            Test details
            <br></br>
                <p>TSH =1.070 <br></br> Thyroxin = 5.6 <br></br> T3 uptake = 27 <br></br>FTI =15<br></br>conclusion:<br></br>    TSh levels are abnormal</p>
            </label>
        </form>
        </div>
        </div>
      
    );
  }

export default uploadtest