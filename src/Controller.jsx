import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboardLayout/Dashboard-layout";

const Controller=()=>{
return (

<Router>
<Dashboard>
    
    <Switch>
        <Route/>
    </Switch>
</Dashboard>
</Router>

)
}

export default Controller;