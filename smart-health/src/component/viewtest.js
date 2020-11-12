import React from 'react';
import "./inventory.css";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useEffect,useState} from 'react';
  const uploadtest=()=>{
    return (
      <div className="thisisit">
      <div className="details">
        <Link to ="/staff-front"><Button className="home">Home</Button></Link>
        <h1>View test report</h1>
        <form id="myForm" onSubmit={(e)=>submit_view_test(e)}>
          <div className="start">
        
            <h5>Patient ID</h5>
            <input id="pid5"></input>
            <Button>Enter</Button>
            <br></br>
            <br></br>

          </div>
            
        </form>
      </div>
      </div>
      
    );
  }

  function submit_view_test(e){
    e.preventDefault();
    let request =  {
      pid5:document.getElementById('pid5').value,
    }
    axios.post('http://localhost:3001/test_report',request)
    .then(resp=>{
      alert(resp.data.message);
    })
    .catch(err=>{
      console.log(err);
    })
    const [initialState, setInitialState] = useState ([
      useEffect (()=>{
        fetch('/').then(res=>{
          if(res.ok)
          {
            return res.json()
          }
        }).then(jsonResponse => setInitialState(jsonResponse.hello))
      }
      )
    ])
  }
export default uploadtest