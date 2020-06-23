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

    console.log(window.innerHeight)
    console.log(window.innerWidth)

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook

    //?Selectors
    const response = useSelector(state => state.form.response)//grab the form response from the reducer

    //*states
    const [show_input, set_show_input] = useState(false)//state to determine whether or not the input is open
    const [redirect, set_redirect] = useState(false)//used to redirect on successful authentication
    const [facebook_response_data, set_facebook_response_data] = useState(null)// a state to hold the response data from facebook

    //!effects
    useEffect(() => {

        if (response) {//if there is a form response

            //and it is a successul signup/login, redirect the user to the dashboard
            if (response.data.message === "User created" || response.data.message === "Login successful") { set_redirect("/dashboard") }

        }
    }, [response])//listen for any form response changes

    const handle_facebook_response = (data) => {//called when a response is received from facebook

        set_facebook_response_data(data)//set the response data
        set_show_input("facebook")//open the input (to enter username only)

    }

    const handle_facebook_signup = (username) => {//called after the user submits their username when signing up with facebook

        const details = {//the user details to send to the front end

            email: facebook_response_data.email,//users email, generated by facebook
            username: username,//the username they entered manually
            password: "facebook_signup",//special password which is changed to a crypto token on the backend
            repeat_password: "facebook_signup"//special password which is changed to a crypto token on the backend

        }

        dispatch(submit_form(details, "user"))//send the user details to the backend to create an account

    }

    return (

        <React.Fragment>

            <div className={[classes.container, show_input && classes.container_input_open].join(" ")}>

                <div className={classes.background_image}></div>

                {/* Logo container*/}
                <div className={classes.logo_container}>

                    <img src={require("../../Assets/Icon/logo.svg")} alt="logo" className={classes.logo} />

                    <span className={classes.recall} style={{color:colours.primary}}>RECALL</span>
                    <span className={classes.study_smarter} style={{color:colours.primary}}>STUDY SMARTER</span>

                </div>

                {/* Button container */}
                <div className={[classes.button_container, show_input && classes.button_container_input_open].join(" ")}>


                    <FacebookButton handle_response={(data) => handle_facebook_response(data)} />

                    <Button

                        test_handle="signup_button"
                        text={"Sign up for an account"}
                        background_color={colours.primary}
                        icon_name="user.svg"
                        onClick={() => toggle_input("signup", show_input, set_show_input)}

                    />

                </div>

                {/* Alt text, changes depending on what kind of input is open*/}
                <div className={classes.alt_text} onClick={() => toggle_input("alt_text", show_input, set_show_input)}>

                    <span test_handle="login_text" className={[classes.login, show_input === "login" && classes.login_input_open].join(" ")}>Already have an account ? Log in</span>
                    <span test_handle="signup_text" className={[classes.signup, show_input === "login" && classes.signup_input_open].join(" ")}>Need to create an account ? Sign up</span>

                </div>

            </div>

            {/* Input section, hidden to start, opened by triggering the toggle_input function */}
            <div className={[classes.input_container, show_input && classes.input_container_open].join(" ")}>

                <Form

                    form_type={show_input}
                    handle_submit={(details) => dispatch(submit_form(details, show_input === "signup" ? "user" : "login"))}
                    handle_facebook_signup={(username) => handle_facebook_signup(username)}

                />

            </div>

            {redirect && <Redirect to={redirect} />}

        </React.Fragment>

    )

}

export default Auth
