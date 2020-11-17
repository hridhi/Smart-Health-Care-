import React from "react";
import './doc-front.css';
import { Link } from 'react-router-dom';
import { Nav, Navbar,Button} from "react-bootstrap";
import Calendar from 'react-calendar';
import image from "./download.png";
const doc_front=()=>{
    return(
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Brand href="#home">Smart-Hospital</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link href="/medical-history2">View patient details</Nav.Link>
    <Nav.Link href="/write-prescription">Write prescription</Nav.Link>
    <Nav.Link href="/viewtest2">View test reports</Nav.Link>
  </Nav>
  <Nav>
 <Link to='/'><Button variant="dark" >Log out</Button></Link>
  </Nav>
</Navbar.Collapse>
</Navbar>
  <div className="image">
      <img src={image} alt="hello"></img>
        <p ><b> “The life so short, the craft so long to learn.”
                                        ― Hippocrates</b>
       
        </p>
        </div>

        <div className="calender">
        <Calendar activeMonth={new Date()} />
        <br></br>
        <br></br>
      
      </div>
</div>
    )
}
export default doc_front;