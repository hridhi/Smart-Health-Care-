import React from 'react';
import './user_front.css';
  const userfront=()=>{
    return (
      <div className="overall">
      <div className="heading"><h1>Welcome</h1>
      <p>Help us to get you know better </p>
      </div>
      <div className="details">
      <form>
           <br></br>
         <label>
              List your allergies if any.
              <textarea name="message" rows="3" cols="30"></textarea>
                </label>
            <br></br>
            <label>
            Have you had severe reaction to any specific medicine in the past?
            <textarea name="message" rows="3" cols="30"></textarea>
            </label>
            <br></br>
            <label>
            Have you undergone any major surgeries?
            <textarea name="message" rows="1" cols="30"></textarea>
            </label>
            <br></br>
            <label>
            what medicines you have been taking and what they are for?
            <br></br>
                <textarea name="message" rows="3" cols="30"></textarea>
            </label>
            <br></br>
            <label>
            How long have you been on these medicines?
            <br></br>
            <textarea name="message" rows="1" cols="30"></textarea>
            </label>
            <br></br>
            <label>
            Which medications have had a change in how you take them?
            <br></br>
            <textarea name="message" rows="3" cols="30"></textarea>
            </label>
            <br></br>
            <label>
            Elaborate on your eating habits
            <br></br>
            <textarea name="message" rows="3" cols="30"></textarea>
            </label>
            <br></br>
            <label>
            Do you exercise?mention no of hrs
            <br></br>
            <textarea name="message" rows="1" cols="30"></textarea>
            </label>
            <br></br>
           <input type="submit" value="Submit" className='box1inp' />
            <br></br>
        </form>
        </div>
      </div>
    );
  }

export default userfront;