import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
  const writeprescription=()=>{
    return (
      <div className="thisisit">
      <div className="details">
        <Link to ="/doc-front"><Button className="home">Home</Button></Link>
        <h1>Write prescription</h1>
      <form id="myForm" onSubmit={(e)=>submit_d_prescription(e)}>
           <br></br>
           <label>
             Enter patient ID
             <br></br>
              <textarea id="pid1" name="message" rows="1" cols="30"></textarea>
                </label>
         <label>
             Enter symptons
             <br></br>
              <textarea id="symp" name="message" rows="3" cols="30"></textarea>
                </label>
            <br></br>
            <label>
            Enter diagnosis
            <br></br>
            <textarea  id="diag" name="message" rows="1" cols="30"></textarea>
            </label>
            <br></br>
            <label>
            Should the patient be admitted?
            <br></br>
            <textarea id="admt"  name="message" rows="1" cols="30"></textarea>
            </label>
            <br></br>
            <label>
            Prescription
            <br></br>
                <textarea id="pres"  name="message" rows="3" cols="30"></textarea>
            </label>
            <br></br>
           <input  type="submit" value="Submit" className='box1inp' />
            <br></br>
        </form>
        </div>
        </div>
       
    );
  }
  function submit_d_prescription(e){
    e.preventDefault();
    let request =  {
        pid1:document.getElementById('pid1').value,
        symp:document.getElementById('symp').value,
        diagnosis:document.getElementById('diag').value,
        admt:document.getElementById('admt').value,
        pres:document.getElementById('pres').value
        
    }
    axios.post('http://localhost:3001/med_current',request)
    .then(resp=>{
      console.log('resp.details'+resp.details)
      if(resp.details.length>0)
      {
        alert('Successfull issued prescription');
        console.log(resp.data.message)
      }
      else
      {
        alert('enter valid details');
      }
      
    })
    .catch(err=>{
      console.log(err);
    })
  }
export default writeprescription;