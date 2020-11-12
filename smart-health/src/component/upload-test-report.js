import React from 'react';
import "./upload-test-report.css";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
  const uploadtest=()=>{
    return (
      <div className="thisisit">
      <div className="details">
        <Link to ="/staff-front"><Button className="home">Home</Button></Link>
        <h1>Update the test report</h1>
        <form id="myForm" onSubmit={(e)=>submit_test_report(e)}>
           <br></br>
         <label>
             Patient ID
             <br></br>
              <textarea id="pid2" name="message" rows="1" cols="30"></textarea>
                </label>
            <br></br>
            <label>
            Test name
            <br></br>
            <textarea id="tst_name" name="message" rows="1" cols="30"></textarea>
            </label>
            <br></br>
            <label>
            Test category
            <br></br>
            <textarea id="tst_category" name="message" rows="1" cols="30"></textarea>
            </label>
            <br></br>
            <label>
            Test details
            <br></br>
                <textarea id="tst_det" name="message" rows="4" cols="30"></textarea>
            </label>
            <br></br>
           <input type="submit" value="Submit" className='box1inp' />
            <br></br>
        </form>
        </div>
        </div>
      
    );
  }
  function submit_test_report(e){
    e.preventDefault();
    let request =  {
      pid2:document.getElementById('pid2').value,
      tst_name:document.getElementById('tst_name').value,
      tst_category:document.getElementById('tst_category').value,
      tst_det:document.getElementById('tst_det').value
    }
    axios.post('http://localhost:3001/submit_tst_report',request)
    .then(resp=>{
      alert(resp.data.message);
    })
    .catch(err=>{
      console.log(err);
    })
  }
  
export default uploadtest