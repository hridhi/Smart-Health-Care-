import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
  const writeprescription=()=>{
    return (
      <div className="thisisit">
      <div className="details">
        <Link to ="/doc-front"><Button className="home">Home</Button></Link>
        <h1>Write prescription</h1>
      <form>
           <br></br>
           <label>
             Enter patient ID
             <br></br>
              <textarea name="message" rows="1" cols="30"></textarea>
                </label>
         <label>
             Enter symptons
             <br></br>
              <textarea name="message" rows="3" cols="30"></textarea>
                </label>
            <br></br>
            <label>
            Enter diagnosis
            <br></br>
            <textarea name="message" rows="1" cols="30"></textarea>
            </label>
            <br></br>
            <label>
            Should the patient be admitted?
            <br></br>
            <textarea name="message" rows="1" cols="30"></textarea>
            </label>
            <br></br>
            <label>
            Prescription
            <br></br>
                <textarea name="message" rows="3" cols="30"></textarea>
            </label>
            <br></br>
           <input type="submit" value="Submit" className='box1inp' />
            <br></br>
        </form>
        </div>
        </div>
       
    );
  }

export default writeprescription;