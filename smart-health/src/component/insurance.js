import React from "react";
import { Button,Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactDOM from 'react-dom';
var element;
const insurance=()=>{
    return(
        <div className="thisisit">
          <Link to ="/staff-front"><Button className="homee">Home</Button></Link>
          <form id="myForm" onSubmit={(e)=>submit_ins(e)}>
            <div className="start">
            <h5>Patient ID</h5>
            <input id="pid7"  ></input>
            <Button type="submit">Enter</Button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>
            <div id="data"></div>
            </form>
            <div className="bill">
  
            </div>
            </div>
    )}
    function submit_ins(e){
      e.preventDefault();
      let request =  {
        pid7:document.getElementById('pid7').value,
      }
      axios.post('http://localhost:3001/ins',request)
      .then(resp=>{
        console.log(resp);
        var details = resp.data;
       
        element = <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Insurance ID</th>
            <th>Company</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{details.ins_id}</td>
            <td>{details.ins_name}</td>
            <td>{details.ins_category}</td>
          </tr>
        </tbody>
      </Table> 
        /*element= <ul>
        <li>INSURANCE ID:{details.pr_id}</li>    
        <li> INSURANCE: {details.med_allergy} </li>
        <li> INSURANCE: {details.med_current}</li>
        <li>INSURANCE: {details.med_past}</li>
        
        </ul>*/
        ReactDOM.render(element, document.getElementById('data'));
        //alert(resp.data);
        
      })
      .catch(err=>{
        console.log(err);
      })
    }
export default insurance;