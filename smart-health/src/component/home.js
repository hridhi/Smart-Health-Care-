import React from 'react';
import './mainpage.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { Link } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
//import signuppage from './signup.js';
//import './login.js';
import { Nav, Navbar,Button } from "react-bootstrap";
const home=() => {
  return ( 
    <div className="App">
    <h1>ATHENA GROUPS <span>🏥</span>  </h1>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Brand href="#home">Smart-Hospital</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link href="#aboutus">About Us</Nav.Link>
    <Nav.Link href="#acheivements">Facelities</Nav.Link>
    <Nav.Link href="#branch">Our Branches</Nav.Link>
    <Nav.Link eventKey={2} href="#contact">
      Contact Us 
    </Nav.Link>
  </Nav>
  <Nav>
 <Link to='/login'><Button variant="dark" >Login</Button></Link>
 <Link to='/signup'><Button variant="dark" to='./signup'>Sign up</Button></Link>
  </Nav>
</Navbar.Collapse>
</Navbar>

<img src='/images.jpg' alt= '<span>🏥</span>'></img>
<div id='aboutus'>
<h1>About Us</h1>
<p>We at Athena strive hard to provide you with world class medical facilities and services.With branches spread across the nation our family has expanded and
achieved new heights in the field of medicine. You as our patients are our number one priority and we will make sure just being a part of our family will
make you feel safe and protected, it is the trust our patients have in us and the non stop effort our staff puts in that us helped grow and reach where we
are today but it does not stop here , we will continue to support you through your difficult times and a well wisher rooting for your good health.
<br></br>

                   
                         “It is health that is real wealth and not pieces of gold and silver.” - Mahatma Gandhi</p>
</div>
<br></br>
<br></br>
<div id='acheivements'>
<h1>facilities</h1>
<p> listed below are the facilities our branches are equipped with:
<br></br>
OPD (Allopathy & Homeopathy)<br></br>
Dental facility<br></br>
Ward/ Indoor facility<br></br>
Minor OT/ Dressing Room<br></br>
Physiotherapy<br></br>
Laboratory Services<br></br>
ECG Services<br></br>
Pharmacy<br></br>
X-ray screening<br></br>
Ambulance Services<br></br>
<br></br>
by registering and becoming a part our family you can check out whether the tests you are required to do or the medicines you are prescribed by the doctor
are available at your nearest branch,make online appointments and maintain online health database. come become a part of our family and avail the beinfits
if you already are not by signing up!</p>
</div>
<br></br>
<br></br>
<div id='branch'>
<h1>Branches</h1>
<p>
Tamil Nadu: 
	Chennai
	Coimbatore
	Salem
  <br></br>
Kerala:
	Kochi
	Thrissur
  <br></br>
Karnataka:
	Banglore north
	Hosur
  <br></br>
Andhra Pradesh:
	Tirupati
	Vishakapatanam
	Vijayawada
  <br></br>
Telengana:
	Hyderabad
	Warangal
  <br></br>
Mahrashtra:
	Mumbai 
	Pune
  <br></br>
Gujarat:
	Ahmedabad
	Vadodara
  <br></br>
</p>
<br></br>
<div className="mb-2">
<Link to="/signup"><Button variant="primary" size="lg">
    Join US
    </Button>
    </Link>
    </div>
    </div>
    <div id='contact'>
    <br></br>
  </div>
  <MDBFooter color="black" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Contact us</h5>
            <p>
              <br></br>
            call us at: 9234-1234-45/78/90<br></br>
        or email us at: athenacustcare@athena.ltd<br></br>
	we value your feedback! write to us at: feedbacksathena@athena.ltd
            </p>
          </MDBCol>
          <MDBCol md="6">
            <ul>
              <li className="list-unstyled">
              <Link to="/login-staff"><a href="#!">Admin login</a></Link>
              </li>
              <li className="list-unstyled">
              <Link to="/login-doctor"><a href="#!">Doctor login</a></Link>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  </div>
  );
}

export default home;
