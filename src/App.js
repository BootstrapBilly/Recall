import React from 'react';

//components
import Auth from "./Pages/Auth/Auth"
import Dashboard from "./Pages/Dashboard/Dashboard"

//external
import { BrowserRouter, Switch, Route } from "react-router-dom"

const App = () => {
  return (

    <BrowserRouter>

      <Switch>

        <Route path="/" exact component={Auth} />
        <Route path="/dashboard" component={Dashboard} />

      </Switch>

    </BrowserRouter>

  );
}

export default App
