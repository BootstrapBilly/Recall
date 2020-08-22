import React, { useEffect, useState } from 'react';

//components
import Authentication from "./Pages/Authentication/Authentication"
import Dashboard from "./Pages/Dashboard/Dashboard"
import AddNew from "./Pages/Add_new/Add_new"
import CombineNotes from "./Pages/Combine_notes/Combine_notes"
import ViewAll from "./Pages/View_all/View_all"
import Friends from "./Pages/Friends/Friends"
import Account from "./Pages/Account/Account"
import ChangePassword from "./Pages/Change_password/Change_password"
import CollectionDetail from "./Shared components/Note/Components/Collection_notes/Collection_notes"
import WakeUpScreen from "./Wake_up_screen"

//external
import { BrowserRouter, Switch, Route } from "react-router-dom"

//redux hooks
import { useDispatch, useSelector } from "react-redux"

//redux action creators
import { handle_successful_login } from "./Store/Actions/2_authentication_action"

//util
import send_request from "./util/send_request"
import { submit_form } from './Store/Actions/0_submit_form_action';
import { mark_server_awake } from './Store/Actions/6_wake_up_server_action';

const App = () => {

  //?selectors
  const response = useSelector(state => state.form.response)
  const user_id = useSelector(state => state.auth.user_id)
  const server_awake = useSelector(state => state.awake.awake)

  //-config
  const dispatch = useDispatch()

  //*states
  const [server_is_awake, set_server_is_awake] = useState(true)

  //!effects

  useEffect(() => {

    if (response) console.log(response)

    if (response && response.data.message === "expired") {

      dispatch(submit_form({ user_id: user_id, refresh_token: window.localStorage.getItem("refresh_token") }, "refresh_jwt"))

    }

    if (response && response.data.message === "Token refreshed") {


      window.localStorage.setItem("token", response.data.token)
      window.localStorage.setItem("refresh_token", response.data.refresh_token)
      window.location.reload()

    }

    //eslint-disable-next-line 
  })

  useEffect(() => {

    if (window.localStorage.getItem("user_id")) {

      dispatch(handle_successful_login(window.localStorage.getItem("token"), window.localStorage.getItem("user_id"), window.localStorage.getItem("username"), window.localStorage.getItem("refresh_token")))

    }
    // eslint-disable-next-line
  }, [window.localStorage])

  useEffect(() => {

    const wake_up_server = async () => {

      const wake_up_sent = await send_request("wakeup", {}, "get")

      if (wake_up_sent.data.message === "Server is awake") {

        set_server_is_awake(true)
        dispatch(mark_server_awake())

      }

    }

    if (!server_awake) { wake_up_server() }
// eslint-disable-next-line
  }, [server_awake])


  return (

    <React.Fragment>

      {server_is_awake ?

        <BrowserRouter>

          <Switch>

            <Route path="/" exact component={Authentication} />
            <Route path="/dashboard" exact component={Dashboard} />
            {/* <Route path="/add_new" exact component={() => <AddNew form_type="note" />} /> */}

            <Route path="/add_new" exact component={AddNew} />

            <Route path="/combine_notes" exact component={CombineNotes} />
            {/* <Route path="/combine_notes" exact component={() => <AddNew form_type="collection" />} /> */}

            <Route path="/view_all" exact component={ViewAll} />
            <Route path="/friends" exact component={Friends} />
            <Route path="/account" exact component={Account} />
            <Route path="/change_password" exact component={ChangePassword} />
            <Route path="/collection_detail" exact component={CollectionDetail} />

          </Switch>

        </BrowserRouter>

        : <WakeUpScreen />}

    </React.Fragment>
  );
}

export default App
