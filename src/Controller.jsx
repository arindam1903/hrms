import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard-layout/Dashboard-layout";
import Calendar from "./screen/calendar/Calendar";
import Home from "./screen/Home/Home";
import Onboarding from "./screen/onboarding/Onboarding";
import Recruitment from "./screen/Recruitment/Recruitment";
import Reports from "./screen/reports/Reports";
import Settings from "./screen/settings/Settings";

const Controller=()=>{
return (
<>

<Router>
    <Dashboard>
  
    <Switch>
        <Route path='/recruitment' component={Recruitment}/>
        <Route path='/onboarding' component={Onboarding}/>
        <Route path='/calendar' component={Calendar}/>
        <Route path='/settings' component={Settings}/>
        <Route path='/reports' component={Reports}/>
        <Route exact path='/hrms' component={Home}/>
    </Switch>

    </Dashboard>
    
</Router>
</>
)
}

export default Controller;