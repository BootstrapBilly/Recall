import React from 'react';

//components
import Auth from "./Pages/Auth/Auth"
import Landing from "./Pages/Landing/Landing"
import Dashboard from "./Pages/Dashboard/Dashboard"
import AddNew from "./Pages/Add_new/Add_new"
import ViewAll from "./Pages/View_all/View_all"
import Friends from "./Pages/Friends/Friends"
import Account from "./Pages/Account/Account"

//external
import { BrowserRouter, Switch, Route } from "react-router-dom"

const App = () => {
  
  return (

    <BrowserRouter>

      <Switch>

        <Route path="/" exact component={Auth} />
        <Route path="/landing" component={Landing} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/add_new" component={AddNew} />
        <Route path="/view_all" component={ViewAll} />
        <Route path="/friends" component={Friends} />
        <Route path="/account" component={Account} />

      </Switch>

    </BrowserRouter>

  );
}

export default App
