import React from "react";
import './login.css';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";/*Nav, Navbar,*/
import ReactDOM from 'react-dom';
import axios from 'axios';
const loginn=()=>{
    return(
        <div className="Login">
        <div className='head1'><h1>LOG IN </h1></div>
          <div className='box1'>
          <img src="https://ga.berkeley.edu/wp-content/uploads/2015/08/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" className="im"/>
          <form id="login-patient" onSubmit={(e)=>submit_login(e)}>
               <br></br>
                <label>
                  Staff ID:
                    <input type="text" id="uname"name="name" className='box1inp'/>
                </label>
                <br></br>
                <label>
                  <br></br>
                  Password:
                    <input type="password" id="pwd" name="name" className='box1inp'/>
                </label>
                <br></br>
                <input type="submit" value="Submit" className='submit' />
                <br></br>
                <div id="data"></div>
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
  axios.post('http://localhost:3001/p_login_chk',request)
  .then(resp=>{
    var details = resp.data;
    var element;
    if(details=='SUCCESS..')
    {
      element = <p>{details}</p>;
      ReactDOM.render(element, document.getElementById('data'));
      window.location.replace('/staff-front');
      
    }
    else
    {
      element = <p>{details}</p>
      ReactDOM.render(element, document.getElementById('data'));
    }
    
  })
  .catch(err=>{
    console.log(err);
  })
}
export default loginn;