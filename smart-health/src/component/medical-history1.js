import React from 'react';//, { useState }
import "./medical-history.css";
import { Button} from "react-bootstrap";
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';

var element;
const MEDICAL1=()=>{
    return(
        <div className="thisisit">
        <Link to ="/staff-front"><Button className="homee">Home</Button></Link>
        <div className="start"></div>
        <div className="boddy">
        <form id="myForm" onSubmit={(e)=>submit_med_his(e)}>
                <h5>Enter Patient ID</h5>
                <input id="pid6"></input>
                <Button type="submit">Enter</Button>
                <div id="data"></div>
        </form>
        </div>
        </div>
)}
function submit_med_his(e){
    e.preventDefault();
    let request =  {
      pid6:document.getElementById('pid6').value,
    }
    axios.post('http://localhost:3001/med_his',request)
    .then(resp=>{
      console.log(resp);
      var details = resp.data;
     
      element = <ul>
      <li>PRESCRIPTION ID:{details.pr_id}</li>    
      <li> ALLERGY TO ANY MEDICINES: {details.med_allergy} </li>
      <li> CURRENT MEDICATION THE PATIENT IS ON: {details.med_current}</li>
      <li>MEDICATION THE PATIENT HAS BEEN IN THE PAST: {details.med_past}</li>
      
      </ul>
      
      ReactDOM.render(element, document.getElementById('data'));
      //alert(resp.data);
      
    })
    .catch(err=>{
      console.log(err);
    })
  }
export default MEDICAL1;