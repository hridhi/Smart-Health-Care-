import React from "react";
import { Button } from "react-bootstrap";//,Table
import { Link } from 'react-router-dom';
import axios from 'axios';
/*
const billing=()=>{
    return(
        <div className="thisisit">
          <Link to ="/staff-front"><Button className="homee">Home</Button></Link>
        <div className="start">
            <h5>Enter Patient ID</h5>
            <input value="2346576"></input>
            <Button>Enter</Button>
            <br></br>
            <br></br>
            </div>
            <div className="bill">
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>S.no</th>
      <th>Payment Date</th>
      <th>Bill number</th>
      <th>Amount</th>
      <th>Mode of payment</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>20-10-01</td>
      <td>69123490</td>
      <td>1000</td>
      <td>cash</td>
      <td>paid</td>
    </tr>
    <tr>
      <td>2</td>
      <td>20-02-29</td>
      <td>69342566</td>
      <td>200</td>
      <td>cash</td>
      <td>paid</td>
    </tr>
    <tr>
      <td>3</td>
      <td>20-09-30</td>
      <td>68274925</td>
      <td>500</td>
      <td>none</td>
      <td>pending</td>
    </tr>
    <tr>
      <td>4</td>
      <td>20-04-25</td>
      <td>60998324</td>
      <td>200</td>
      <td>credit card</td>
      <td>paid</td>
    </tr>
    <tr>
      <td>5</td>
      <td>20-09-29</td>
      <td>61234991</td>
      <td>400</td>
      <td>none</td>
      <td>Pending</td>
    </tr>
  </tbody>
</Table> 
            </div>
            </div>
    )}*/
    const billing=()=>{
      return (
        <div className="thisisit">
        <div className="details">
          <Link to ="/staff-front"><Button className="home">Home</Button></Link>
          <h1>Update the test report</h1>
          <form id="myForm" onSubmit={(e)=>submit_pay_details(e)}>
             <br></br>
           <label>
               Patient ID
               <br></br>
                <textarea id="pid3" name="message" rows="1" cols="30"></textarea>
                  </label>
              <br></br>
              <label>
              Amount to be paid
              <br></br>
              <textarea id="pay_amt" name="message" rows="1" cols="30"></textarea>
              </label>
              <br></br>
              <label>
              Payment status:
              <br></br>
              <textarea id="pay_status" name="message" rows="1" cols="30"></textarea>
              </label>
              <br></br>
              <label>
              payment date
              <br></br>
                  <textarea id="pay_date" name="message" rows="4" cols="30"></textarea>
              </label>
              <br></br>
              <label>
              payment method
              <br></br>
                  <textarea id="pay_method" name="message" rows="4" cols="30"></textarea>
              </label>
              <br></br>
              
             <input type="submit" value="Submit" className='box1inp' />
              <br></br>
          </form>
          </div>
          </div>
        
      );
    }
    
    function submit_pay_details(e){
      e.preventDefault();
      let request =  {
          pid3:document.getElementById('pid3').value,
          pay_amt:document.getElementById('pay_amt').value,
          pay_status:document.getElementById('pay_status').value,
          pay_date:document.getElementById('pay_date').value,
          pay_method:document.getElementById('pay_method').value
         
      }
      axios.post('http://localhost:3001/pay_det',request)
      .then(resp=>{
        alert(resp.data.message);
      })
      .catch(err=>{
        console.log(err);
      })
    }
export default billing;