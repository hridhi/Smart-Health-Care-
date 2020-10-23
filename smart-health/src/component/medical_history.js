import React, { useState } from 'react';
import "./medical-history.css";
import { Button} from "react-bootstrap";
import { Link } from 'react-router-dom';
const MEDICAL=()=>{
    return(
        <div className="thisisit">
        <Link to ="/staff-front"><Button className="homee">Home</Button></Link>
        <div className="start">
            <h5>Enter Patient ID</h5>
            <input  value="2346576" ></input>
            <Button>Enter</Button>
            </div>
            <div className="boddy">
      <form>
         <label>
              List of Allergies.
              <p>Dust allergy</p>
                </label>
            <br></br>
            <label>
            Severe reaction to any specific medicine in the past.
            <p>Yes once when I had paracetamol I had vomitings and swelling of my arms and legs and was unwell till 3 days</p>
            </label>
            <br></br>
            <label>
            Major surgeries undergone.
            <p>No I havent undergone any major surgeries</p>
            </label>
            <br></br>
            <label>
            Current Medication.
            <br></br>
                <p>I have been on astrovastin 400 mg for controlling cholestrol levels.</p>
            </label>
            <br></br>
            <label>
            Duration of medication.
            <br></br>
            <p>I have been prescribed to take these daily for the past 3 years.</p>
            </label>
            <br></br>
            <label>
            Change in medication.
            <br></br>
            <p>Nill</p>
            </label>
            <br></br>
            <label>
            Eating habits.
            <br></br>
            <p>I have a pretty good diet.I eat fruits regularly and also drink sufficient water.</p>
            </label>
            <br></br>
            <label>
            Exercise and number of hours.
            <br></br>
            <p>Yes I exercise everyday. I exercise 30 min a day.</p>
            </label>
            <br></br>
        </form>
        </div>
        </div>
)}
export default MEDICAL;