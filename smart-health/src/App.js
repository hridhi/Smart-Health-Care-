import React, { Component } from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';        
import home from './component/home';
import login from './component/login';
import submit_signup from './component/signup';
import userfront from './component/patient-history';
import userhome from './component/user_home';
import loginn from './component/login-p';
import makeappoinment from './component/make-appoinments';
import staff_front from './component/staff-front';
import loginnd from './component/login-doc';
import doc_front from './component/doc-front';
import MEDICAL from './component/medical_history';         
import billing from './component/billing';
import pharmacy from './component/pharmacy';
import inventory from './component/inventory';
import insurance from './component/insurance';
import writePrescription from './component/write-prescription';
import uploadtest from './component/upload-test-report';
import viewtest from './component/viewtest';

class App extends Component {
  render() {
    return (
<BrowserRouter>
        
            <Switch>
             <Route path="/" component={home} exact/>
             <Route path="/login" component={login}/>
             <Route path="/signup" component={submit_signup}/>
             <Route path="/user_front" component={userfront}/>
             <Route path="/user_home" component={userhome}/>
             <Route path="/make-appoinment" component={makeappoinment}/>
             <Route path="/login-staff" component={loginn}/>
             <Route path="/staff-front" component={staff_front}/>
             <Route path="/login-doctor" component={loginnd}/>
             <Route path="/doc-front" component={doc_front}/>
             <Route path="/medical-history" component={MEDICAL}/>
             <Route path="/billing" component={billing}/>
             <Route path="/pharmacy" component={pharmacy}/>
             <Route path="/inventory" component={inventory}/>
             <Route path="/insurance" component={insurance}/>
             <Route path="/write-prescription" component={writePrescription}/>
             <Route path="/uploadtest" component={uploadtest}/>
             <Route path="/viewtest" component={viewtest}/>
           </Switch>
      </BrowserRouter> 
    );
  }
}


export default App;