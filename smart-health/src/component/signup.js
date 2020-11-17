import React from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";/*Nav, Navbar,*/
import ReactDOM from 'react-dom';
import axios from 'axios';
//import { Router } from 'express';
var element;
const signup=()=>{
  return ( 
    <div className="Login">
    <div className='head1'><h1>SIGN UP</h1></div>
      <div id='box1'>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.3/jquery.mCustomScrollbar.concat.min.js'></script>
        <img src="https://ga.berkeley.edu/wp-content/uploads/2015/08/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" className="im"/>
         <form id="myForm" onSubmit={(e)=>submit_signup(e)}>
           <br></br>
         <label>
              Name:
                <input type="text" name="name" id ="name1" className='box1inp'/>
            </label>
            <br></br>
            <label>
              age:
                <input type="number" name="age" id ="age" className='box1inp'/>
            </label>
            <br></br>
            <label>
              address:
                <input type="text" name="name" id="address" className='box1inp'/>
            </label>
            <br></br>
            <label>
              city:
                <input type="text" name="name" id ="city" className='box1inp'/>
            </label>
            <br></br>
            <label>
              pincode:
                <input type="number" name="name" id="pincode" className='box1inp'/>
            </label>
            <br></br>
            <label>
              contact_number:
                <input type="number" name="name" id="contact_number" className='box1inp'/>
            </label>
            <br></br>
            <label>
              state:
                <input type="text" name="name" id="state" className='box1inp'/>
            </label>
            <br></br>
            <label>
              User Name:
                <input type="text" name="name" id="user_name"className='box1inp'/>
            </label>
            <br></br>
            <label>
              Password:
                <input type="password" name="name" id="pass"className='box1inp'/>
            </label>
            <br></br>
            <label>
              reenter password:
                <input type="password" name="name" id="pass_chk" className='box1inp'/>
            </label>
            
            <br></br><br></br>
            <Button type="submit" value="Submit" id="submit"className='box1inp' >Submit</Button>
            
            <div id="data"></div>
            <br></br>
        </form>
       </div>
        <Link to='/'><Button variant="dark" className='but'>Home</Button></Link>
       </div>
        
  );
  
}

function submit_signup(e){
  e.preventDefault();
  let request =  {
      name1:document.getElementById('name1').value,
      address:document.getElementById('address').value,
      pincode:document.getElementById('pincode').value,
      state:document.getElementById('state').value,
      city:document.getElementById('city').value,
      username:document.getElementById('user_name').value,
      pass:document.getElementById('pass').value,
      pass_chk:document.getElementById('pass_chk').value,
      cont_no:document.getElementById('contact_number').value,
      age:document.getElementById('age').value
  }
  axios.post('http://localhost:3001/api/insert',request)
  .then(resp=>{
    var details = resp.data;
    if(details)
    {
      element = <p >successfully signed up</p>;
      ReactDOM.render(element, document.getElementById('data'));
      window.location.replace('/login');
    }
    else
    {
      alert('Password mismatched !!...')
    }
  })
  .catch(err=>{
    console.log(err);
  })
}
export default signup;
