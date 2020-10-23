import React from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import { Nav, Navbar,Button } from "react-bootstrap";
const signup=()=>{
  return ( 
    <div className="Login">
    <div className='head1'><h1>SIGN UP</h1></div>
      <div id='box1'>
      <img src="https://ga.berkeley.edu/wp-content/uploads/2015/08/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" class="im"/>
         <form>
           <br></br>
         <label>
              Name:
                <input type="text" name="name" className='box1inp'/>
            </label>
            <br></br>
            <label>
              address:
                <input type="text" name="name" className='box1inp'/>
            </label>
            <br></br>
            <label>
              city:
                <input type="text" name="name" className='box1inp'/>
            </label>
            <br></br>
            <label>
              pincode:
                <input type="number" name="name" className='box1inp'/>
            </label>
            <br></br>
            <label>
              contact_number:
                <input type="number" name="name" className='box1inp'/>
            </label>
            <br></br>
            <label>
              state:
                <input type="text" name="name" className='box1inp'/>
            </label>
            <br></br>
            <label>
              User Name:
                <input type="text" name="name" className='box1inp'/>
            </label>
            <br></br>
            <label>
              Password:
                <input type="password" name="name" className='box1inp'/>
            </label>
            <br></br>
            <label>
              reenter password:
                <input type="password" name="name" className='box1inp'/>
            </label>
            <br></br>
            <input type="submit" value="Submit" className='box1inp' />
            <br></br>
        </form>
        </div>
        <Link to='/'><Button variant="dark" className='but'>Home</Button></Link>
        </div>
  );
}

export default signup;
