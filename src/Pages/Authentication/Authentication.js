import React, { useState, useEffect } from 'react'

import classes from './Authentication.module.css'

//components
import AuthForm from "./Components/Auth_form/Auth_form"
import Landing from "./Components/Landing/Landing"

//redux hooks
import { useSelector, useDispatch } from "react-redux"

//redux action creators
import { handle_successful_login } from "../../Store/Actions/2_authentication_action"
import { clear_response } from '../../Store/Actions/0_submit_form_action'

//external
import { Redirect } from "react-router-dom"

export const Authentication = () => {

    //-config
    const dispatch = useDispatch()

    //?selectors
    const response = useSelector(state => state.form.response)

    //*states
    const [content, set_content] = useState("landing")
    const [redirect, set_redirect] = useState(false)

    //!effects

    // eslint-disable-next-line
    useEffect(() => { if (window.localStorage.getItem("user_id")) set_redirect("/dashboard") })

    useEffect(() => {

        if (response) {//if there is a form response

            //and it is a successul signup/login, redirect the user to the dashboard
            if (response.data.message === "User created" || response.data.message === "Login successful") {

                dispatch(handle_successful_login(response.data.token, response.data.user_id, response.data.username))

                set_redirect("/dashboard")

                dispatch(clear_response())

            }

        }
        // eslint-disable-next-line
    }, [response])//listen for any form response changes


    return (

        <React.Fragment>

            <div className={classes.container}>

                <div className={[classes.landing_container, content === "landing" && classes.landing_in_view].join(" ")}>
                    <Landing handle_go_forward={() => set_content("form")} />
                </div>

                <div className={[classes.form_container, content === "form" && classes.form_in_view].join(" ")}>
                    <AuthForm handle_go_back={() => set_content("landing")} />
                </div>

                {redirect && <Redirect to={redirect} />}

            </div>

        </React.Fragment>

    )

}

export default Authentication