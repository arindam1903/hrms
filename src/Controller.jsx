import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboardLayout/Dashboard-layout";
import Home from "./screen/Home";
import Requirement from "./screen/Requirement";

const Controller=()=>{
return (
<>

<Router>

    
    <Switch>
        <Route path='/req' component={Requirement}/>
        <Route exact path='/' component={Home}/>
    </Switch>



</Router>
</>
)
}

export default Controller;