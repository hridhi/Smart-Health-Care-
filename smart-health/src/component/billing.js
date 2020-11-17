import React from "react";
import { Button } from "react-bootstrap";//,Table
import { Link } from 'react-router-dom';
import axios from 'axios';

    const billing=()=>{
      return (
        <div className="thisisit">
        <div className="details">
          <Link to ="/staff-front"><Button className="home">Home</Button></Link>
          <h1>Update Bills</h1>
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
                  <textarea id="pay_date" name="message" rows="1" cols="30"></textarea>
              </label>
              <br></br>
              <label>
              payment method
              <br></br>
                  <textarea id="pay_method" name="message" rows="1" cols="30"></textarea>
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
        if(resp)
        {
          alert('Bill updated');
          console.log(resp.data.message)
        }
        
        
      })
      .catch(err=>{
        console.log(err);
      })
    }
export default billing;