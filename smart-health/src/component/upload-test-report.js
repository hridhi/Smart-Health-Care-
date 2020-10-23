import React from 'react';
import "./upload-test-report.css";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
  const uploadtest=()=>{
    return (
      <div className="thisisit">
      <div className="details">
        <Link to ="/staff-front"><Button className="home">Home</Button></Link>
        <h1>Update the test report</h1>
      <form>
           <br></br>
         <label>
             Patient ID
             <br></br>
              <textarea name="message" rows="1" cols="30"></textarea>
                </label>
            <br></br>
            <label>
            Test name
            <br></br>
            <textarea name="message" rows="1" cols="30"></textarea>
            </label>
            <br></br>
            <label>
            Test category
            <br></br>
            <textarea name="message" rows="1" cols="30"></textarea>
            </label>
            <br></br>
            <label>
            Test details
            <br></br>
                <textarea name="message" rows="4" cols="30"></textarea>
            </label>
            <br></br>
           <input type="submit" value="Submit" className='box1inp' />
            <br></br>
        </form>
        </div>
        </div>
      
    );
  }

export default uploadtest