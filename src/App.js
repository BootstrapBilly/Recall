import React, { useEffect, useState } from 'react';

//components
import Authentication from "./Pages/Authentication/Authentication"
import Dashboard from "./Pages/Dashboard/Dashboard"
import AddNew from "./Pages/Add_new/Add_new"
import ViewAll from "./Pages/View_all/View_all"
import Friends from "./Pages/Friends/Friends"
import Account from "./Pages/Account/Account"
import ChangePassword from "./Pages/Change_password/Change_password"
import CollectionDetail from "./Shared components/Note/Components/Collection_notes/Collection_notes"
import WakeUpScreen from "./Wake_up_screen"

//external
import { BrowserRouter, Switch, Route } from "react-router-dom"

//redux hooks
import { useDispatch } from "react-redux"

//redux action creators
import { handle_successful_login } from "./Store/Actions/2_authentication_action"

//util
import send_request from "./util/send_request"

const App = () => {

  //-config
  const dispatch = useDispatch()

  //*states
  const [server_is_awake, set_server_is_awake] = useState(false)

  //!effects
  useEffect(() => {

    if (window.localStorage.getItem("user_id")) {

      dispatch(handle_successful_login(window.localStorage.getItem("token"), window.localStorage.getItem("user_id"), window.localStorage.getItem("username")))

    }
    // eslint-disable-next-line
  }, [window.localStorage])

  useEffect(() => {

    const wake_up_server = async () => {

      const wake_up_sent = await send_request("wakeup", {}, "get")

      if (wake_up_sent.data.message === "Server is awake") {

        set_server_is_awake(true)

      }

    }

    wake_up_server()

  }, [])


  return (

    <React.Fragment>

      {server_is_awake ?

        <BrowserRouter>

          <Switch>

            <Route path="/" exact component={Authentication} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/add_new" component={() => <AddNew form_type="note" />} />
            <Route path="/combine_notes" component={() => <AddNew form_type="collection" />} />
            <Route path="/view_all" component={ViewAll} />
            <Route path="/friends" component={Friends} />
            <Route path="/account" component={Account} />
            <Route path="/change_password" component={ChangePassword} />
            <Route path="/collection_detail" component={CollectionDetail} />

          </Switch>

        </BrowserRouter>

        : <WakeUpScreen />}

    </React.Fragment>
  );
}

export default App
