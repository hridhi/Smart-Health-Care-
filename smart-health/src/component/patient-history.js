import React from 'react';
import './user_front.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
  const userfront=()=>{
    return (
      <div className="overall">
      <div className="heading"><h1>Welcome</h1>
      <Link to ="/user_home"><Button className="home1">Home</Button></Link>
      <p>Help us to get you know better </p>
      </div>
      <div className="details">
      <form id="myForm" onSubmit={(e)=>submit_p_medhistory(e)}>
           <label>
              enter you patient ID:
              <textarea id="P_ID"name="message" rows="3" cols="30"></textarea>
                </label>
            <br></br>
            <label></label>
         <label>
              List your allergies if any.
              <textarea id="allergy"name="message" rows="3" cols="30"></textarea>
                </label>
            <br></br>
            <label>
            Have you had severe reaction to any specific medicine in the past?
            <textarea id="reaction" name="message" rows="3" cols="30"></textarea>
            </label>
            <br></br>
            <label>
            Have you undergone any major surgeries?
            <textarea id="surgery" name="message" rows="1" cols="30"></textarea>
            </label>
            <br></br>
            <label>
            what medicines you have been taking and what they are for?
            <br></br>
                <textarea id="medicine" name="message" rows="3" cols="30"></textarea>
            </label>
            <br></br>
            <label>
            How long have you been on these medicines?
            <br></br>
            <textarea id="duration" name="message" rows="1" cols="30"></textarea>
            </label>
            <br></br>
            <label>
            Which medications have had a change in how you take them?
            <br></br>
            <textarea id="med_det" name="message" rows="3" cols="30"></textarea>
            </label>
            <br></br>
            <label>
            Elaborate on your eating habits
            <br></br>
            <textarea id="eat" name="message" rows="3" cols="30"></textarea>
            </label>
            <br></br>
            <label>
            Do you exercise?mention no of hrs
            <br></br>
            <textarea id="workout" name="message" rows="1" cols="30"></textarea>
            </label>
            <br></br>
           <input type="submit" value="Submit" className='box1inp' />
            <br></br>
        </form>
        </div>
      </div>
    );
  }
  function submit_p_medhistory(e){
    e.preventDefault();
    let request =  {
        pid:document.getElementById('P_ID').value,
        allergy:document.getElementById('allergy').value,
        reaction:document.getElementById('reaction').value,
        surgery:document.getElementById('surgery').value,
        medicine:document.getElementById('medicine').value,
        duration:document.getElementById('duration').value,
        med_det:document.getElementById('med_det').value,
        eat:document.getElementById('eat').value,
        workout:document.getElementById('workout').value,
    }
    axios.post('http://localhost:3001/insert_p_med_his',request)
    .then(resp=>{
      console.log(resp)
      alert('Successfully entered medical history'); 
    })
    .catch(err=>{
      console.log(err);
    })
  }
export default userfront;