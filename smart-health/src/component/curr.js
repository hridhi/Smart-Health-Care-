import React from 'react';// ,{Component}
import "./inventory.css";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactDOM from 'react-dom';
var element;
//import {useEffect,useState} from 'react';
  const currp=()=>{
    return (

      <div className="thisisit">
      <div className="details">
        <Link to ="/user_home"><Button className="home">Home</Button></Link>
        <h1>View my prescription </h1>
        <form id="myForm" onSubmit={(e)=>submit_CP(e)}>
          <div className="start">
        
            <h5>Patient ID</h5>
            <input id="pid5"></input>
            <br></br>
            <Button type="submit" variant="dark" id="submit" className='box1inp'>Enter</Button>
            <br></br>
            <br></br>
            <div id="data"></div>
          </div>
            
        </form>
      </div>
      </div>
    );
  }
  function submit_CP(e){
    e.preventDefault();
    let request =  {
      pid6:document.getElementById('pid5').value,
    }
    axios.post('http://localhost:3001/med_his',request)
    .then(resp=>{
      console.log(resp);
      var details = resp.data;
      element = <ul>
      <li>PRESCRIPTION ID:{details.pr_id}</li>    
      <li>MEDICATION PRESCRIPBED FOR THE PATIENT: {details.med_current}</li>
      <li>MEDICATION THE PATIENT HAS BEEN IN THE PAST: {details.med_past}</li>
      </ul>
      
      ReactDOM.render(element, document.getElementById('data'));
      
    })
    .catch(err=>{
      console.log(err);
    })
  }

export default currp;