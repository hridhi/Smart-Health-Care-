import React from "react";
import "./inventory.css";
import { Button } from "react-bootstrap";//,Table
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';
var element;
const inventory=()=>{
    return(
        <div className="thisisit">
          <Link to ="/staff-front"><Button className="homee">Home</Button></Link>
        <div className="start">
          <form id="myForm" onSubmit={(e)=> chck__inventory(e)}>
            <h5>Branch ID</h5>
            <input id="brid"></input>
            <h5>EQUIPMENT ID</h5>
            <input id="eqid"></input>
            <Button type="submit">Enter</Button>
            <div id="data"></div>
            </form>
            <br></br>
            <br></br>
            </div>
            <div className="bill">
           
            </div>
            </div>
    )}
    function chck__inventory(e){
      e.preventDefault();
      let request =  {
        
          brid:document.getElementById('brid').value,
          eqid:document.getElementById('eqid').value,
      }
      axios.post('http://localhost:3001/chk-inv',request)//incomplete
      .then(resp=>{
        var details = resp.data;
        element = <ul>
      <li>EQUIPMENT AVAILABILTY:{details.eq_status}</li>    
      <li>COUNT: {details.eq_no} </li>
      <li>EQUIPMENT NAME: {details.eq_name} </li>
      
      </ul>
      
      ReactDOM.render(element, document.getElementById('data'));
      })
      .catch(err=>{
        console.log(err);
      })
    }
    
export default inventory;
/*<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>S.no</th>
      <th>Equipment name</th>
      <th>Quantity</th>
      <th>Availability</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>syringe</td>
      <td>20</td>
      <td>available</td>
    </tr>
    <tr>
      <td>2</td>
      <td>x-ray</td>
      <td>4</td>
      <td>unavailable</td>
    </tr>
    <tr>
      <td>3</td>
      <td>ultrasonography</td>
      <td>2</td>
      <td>available</td>
    </tr>
    <tr>
      <td>4</td>
      <td>CT scan</td>
      <td>1</td>
      <td>unavailable</td>
    </tr>
    <tr>
      <td>5</td>
      <td>test tubes</td>
      <td>300</td>
      <td>available</td>
    </tr>
  </tbody>
</Table> */