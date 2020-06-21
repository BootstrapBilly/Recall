import React, { useState, useEffect } from 'react'

//css
import classes from "./Auth.module.css"

//components
import Button from "./Components/Button/Button"
import FacebookButton from "./Components/FacebookButton/FacebookButton"
import Form from "./Components/Form/Form"

//util
import colours from "../../util/colours"

//external
import { Redirect } from 'react-router'

//redux hooks
import { useDispatch, useSelector } from "react-redux"

//redux action creators
import { submit_form } from "../../Store/Actions/0_submit_form_action"

//functions
import toggle_input from "./Functions/toggle_input"

export const Auth = () => {

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook

    //?Selectors
    const response = useSelector(state => state.form.response)//grab the form response from the reducer

    //*states
    const [input_open, set_input_open] = useState(false)//state to determine whether or not the input is open
    const [redirect, set_redirect] = useState(false)//used to redirect on successful authentication
    const [facebook_response_data, set_facebook_response_data] = useState(null)

    //!effects
    useEffect(() => {

        if (response) {//if there is a form response

            //and it is a 200 or 201, redirect the user to the dashboard
            if (response.status === 200 || response.status === 201) { set_redirect("/dashboard") }

        }
    }, [response])//listen for any form response changes

    const handle_facebook_response = (data) => {

        console.log(data)
        set_facebook_response_data(data)
        set_input_open("facebook")
    }

    const handle_facebook_signup = (username) => {

        const details = {

            email:facebook_response_data.email,
            username:username,
            password:"facebook_signup",
            repeat_password:"facebook_signup"

        }

        dispatch(submit_form(details, "user"))

    }

    return (

        <React.Fragment>

            <div className={[classes.container, input_open && classes.container_input_open].join(" ")}>

                <div className={classes.background_image}></div>

                {/* Logo container*/}
                <div className={classes.logo_container}>

                    <img src={require("../../Assets/Icon/logo.svg")} alt="logo" className={classes.logo} />

                </div>

                {/* Button container */}
                <div className={[classes.button_container, input_open && classes.button_container_input_open].join(" ")}>

                    {/* <Button text={"Connect with Facebook"} background_color="#1877f2" icon_name="facebook.svg" /> */}
                    <FacebookButton handle_response={(data)=> handle_facebook_response(data)}/>
                    <Button text={"Sign up for an account"} background_color={colours.primary} icon_name="user.svg" onClick={() => toggle_input("signup", input_open, set_input_open)} />

                </div>

                {/* Alt text, changes depending on what kind of input is open*/}
                <div className={classes.alt_text} onClick={() => toggle_input("alt_text", input_open, set_input_open)}>

                    <span className={[classes.login, input_open === "login" && classes.login_input_open].join(" ")}>Already have an account ? Log in</span>
                    <span className={[classes.signup, input_open === "login" && classes.signup_input_open].join(" ")}>Need to create an account ? Sign up</span>

                </div>

            </div>

            {/* Input section, hidden to start, opened by triggering the toggle_input function */}
            <div className={[classes.input_container, input_open && classes.input_container_open].join(" ")}>

                <Form form_type={input_open} 
                handle_submit={(details) => dispatch(submit_form(details, input_open === "signup" ? "user" : "login"))}
                handle_facebook_signup={(username)=> handle_facebook_signup(username)}
                />

            </div>

            {redirect && <Redirect to={redirect} />}

        </React.Fragment>

    )

}

export default Auth
