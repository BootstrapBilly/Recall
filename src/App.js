import React, {useEffect} from 'react';

//components
// import Auth from "./Pages/Auth/Auth"
import Authentication from "./Pages/Authentication/Authentication"
import Landing from "./Pages/Landing/Landing"
import Dashboard from "./Pages/Dashboard/Dashboard"
import AddNew from "./Pages/Add_new/Add_new"
// import CombineNotes from "./Pages/Combine Notes/Combine_notes"
import ViewAll from "./Pages/View_all/View_all"
import Friends from "./Pages/Friends/Friends"
import Account from "./Pages/Account/Account"
import ChangePassword from "./Pages/Change_password/Change_password"

//external
import { BrowserRouter, Switch, Route } from "react-router-dom"

//redux hooks
import {useDispatch} from "react-redux"

//redux action creators
import {handle_successful_login} from "./Store/Actions/2_authentication_action"

const App = () => {

  const dispatch = useDispatch()

  useEffect(()=> {

    if(window.localStorage.getItem("user_id")){

        dispatch(handle_successful_login(window.localStorage.getItem("token"), window.localStorage.getItem("user_id"), window.localStorage.getItem("username")))

    }

},[window.localStorage])
  
  return (

    <BrowserRouter>

      <Switch>

        <Route path="/" exact component={Authentication} />
        <Route path="/landing" component={Landing} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/add_new" component={()=> <AddNew form_type="note"/>} />
        <Route path="/combine_notes" component={()=> <AddNew form_type="collection"/>}  />
        <Route path="/view_all" component={ViewAll} />
        <Route path="/friends" component={Friends} />
        <Route path="/account" component={Account} />
        <Route path="/change_password" component={ChangePassword} />

      </Switch>

    </BrowserRouter>

  );
}

export default App
