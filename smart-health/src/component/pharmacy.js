import React from "react";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';
var element;
const pharmacy=()=>{
    return(
        <div className="thisisit">
          
           <Link to ="/staff-front"><Button className="homee">Home</Button></Link>
        <div className="start">
        <form id="myForm" onSubmit={(e)=>submit_pharm(e)}>
            <h5>Enter Medicine ID</h5>
            <input id='med_id'></input>
            <br></br>
            <br></br>
            <h5>Enter Branch ID</h5>
            <input id="br_id"></input>
            <Button type='submit'>Enter</Button>
            <div id="data"></div>
            </form>
            <br></br>
            <br></br>
            </div></div>
    )}
    function submit_pharm(e){
      e.preventDefault();
      let request =  {
        br_id:document.getElementById('br_id').value,
        med_id:document.getElementById('med_id').value,
      }
      axios.post('http://localhost:3001/pharm',request)
      .then(resp=>{
        console.log(resp);
        var details = resp.data;
        /*
         med_allergy:[med_allergy],
                      med_current:[med_current],
                      med_past:[med_past],
                      pr_id:[pr_id]
        */
        element = <ul>
        <li>MEDICINE NAME: {details.med_name}</li>    
        <li> CATEGORY:{details.med_category} </li>
        <li>AVAILABILITY: {details.med_availability}</li>
        <li>PRICE: {details.med_price}₹</li>
        </ul>
        
        ReactDOM.render(element, document.getElementById('data'));
        //alert(resp.data);
        
      })
      .catch(err=>{
        console.log(err);
      })
    }
export default pharmacy;