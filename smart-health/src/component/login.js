import React from "react";
import './login.css';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";/*Nav, Navbar,*/
import axios from 'axios';

const login=()=>{
    return(
        <div className="Login">
        <div className='head1'><h1>LOG IN </h1></div>
          <div className='box1'>
          <img src="https://ga.berkeley.edu/wp-content/uploads/2015/08/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" className="im"/>
          <form id="login-patient" onSubmit={(e)=>submit_login(e)}>
               <br></br>
                <label>
                  User Name:
                    <input type="text" name="uname" id="uname" className='box1inp'/>
                </label>
                <br></br>
                <label>
                  <br></br>
                  Password:
                    <input type="password" name="pwd" id="pwd"className='box1inp'/>
                </label>
                <br></br>
               <Link to ="/user_home"><input type="submit" value="Submit" className='submit' /></Link> 
                <br></br>
            </form>
            </div>
            <Link to='/'><Button variant="dark" className='but' >Home</Button></Link>
            </div>  
    );
}


function submit_login(e){
  e.preventDefault();
  let request =  {
      username:document.getElementById('uname').value,
      pass:document.getElementById('pwd').value,
  }
  axios.post('http://localhost:3001/api/login_chk',request)
  .then(resp=>{
    alert(resp.data.message);
  })
  .catch(err=>{
    console.log(err);
  })
}
export default login;