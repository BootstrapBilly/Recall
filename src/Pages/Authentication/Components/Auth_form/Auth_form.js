import React, { useState, useEffect } from 'react'

import classes from './Auth_form.module.css'

//components
import BackArrow from "../../../../Shared components/Back_arrow/Back_arrow"
import Logo from "../../../../Shared components/Logo/Logo"
import Input from "../../../../Shared components/Input/Input"
import PasswordCriteria from "../../../../Shared components/Password_criteria/Password_criteria"

//util
import colours from '../../../../util/colours'
import capitalizeFirstChar from '../../../../util/capitalize_first'
import validate_password from "../../../../util/validate_password"

//redux hooks
import { useDispatch, useSelector } from "react-redux"

//redux action creators
import { submit_form, clear_response } from "../../../../Store/Actions/0_submit_form_action"

export const Auth_form = props => {

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook

    //?selectors
    const response = useSelector(state => state.form.response)//grab the response from the api

    //*states
    const [button_colour, set_button_colour] = useState("grey")
    const [current_action, set_current_action] = useState("signup")//dictates the type of form, signup/login/request new password
    const [user_details, set_user_details] = useState({//stores the user details and controls each input in the form
        email: "",
        username: "",
        password: "",
        repeat_password: ""
    })

    const [email_for_reset, set_email_for_reset] = useState(null)//hold the users email if they wish to reset their password

    const handle_action_button_click = () => {

        //if its a recover password form, send the request to the password_reset endpoint with the email
        if (current_action === "recover password") return dispatch(submit_form({email: email_for_reset}, "password_reset"))

        //otherwise send it to the login or create user endpoint with the user details
        else return dispatch(submit_form(user_details, current_action === "login" ? "login" : "user"))

    }
        //!effects
    useEffect(() => {

        if(current_action === "signup"){

            const validation_result = validate_password(user_details.password, user_details.repeat_password)
    
            if (validation_result.all_met && user_details.email && user_details.username) set_button_colour(colours.primary)
        
            else set_button_colour("grey")
        }

        if(current_action === "login"){

            if(user_details.email && user_details.password) set_button_colour(colours.primary)
        
            else set_button_colour("grey")

        }

        if(current_action === "recover password"){

            if(email_for_reset) set_button_colour(colours.primary)
        
            else set_button_colour("grey")

        }
    
    }, [user_details, email_for_reset])

    return (

        <div className={classes.container}>

            <div className={classes.form_wrapper}>

                <BackArrow onClick={props.handle_go_back} />

                <div className={classes.logo_container}>

                    <Logo />

                </div>

                <div className={classes.prompt_container}>
                    
                    {/* Text which states the type of form */}
                    <span test_handle="form_type" className={classes.current_action}>{capitalizeFirstChar(current_action)}</span>

                    {/* Text to toggle the form type from login to signup or back */}
                    <span

                        test_handle="switch_form_type_text"
                        className={classes.switch_action_text}
                        onClick={() => set_current_action(current_action === "login" ? "signup" : "login")}

                    >

                        {current_action === "login" ? "Need to create an account ? Sign up" : "Already have an account ? Log in"}

                    </span>

                </div>

                <div className={classes.input_container}>

                    {current_action !== "recover password" && //username or email input

                        <Input

                            test_handle="email_or_username_input"
                            authentication
                            label={current_action === "login" ? "Username or email" : "Email address"}
                            placeholder={"Example@test.com"}
                            value={user_details.email}
                            onChange={(e) => set_user_details({ ...user_details, email: e.target.value })}

                        />

                    }

                    {current_action === "signup" && //username input

                        <Input

                            test_handle="username_input"
                            authentication
                            label={"Username"}
                            placeholder={"Johndoe12"}
                            value={user_details.username}
                            onChange={(e) => set_user_details({ ...user_details, username: e.target.value })}

                        />

                    }

                    {current_action !== "recover password" && //password input

                        <Input

                            test_handle="password_input"
                            authentication
                            label={"Password"}
                            placeholder="Enter your password"
                            type="password"
                            value={user_details.password}
                            onChange={(e) => set_user_details({ ...user_details, password: e.target.value })}
                            visiblity_toggleable

                        />
                    }


                    {current_action === "signup" && //repeat password input

                        <Input

                            test_handle="repeat_password_input"
                            authentication
                            label={"Repeat password"}
                            type="password"
                            placeholder={"Enter your password"}
                            value={user_details.repeat_password}
                            onChange={(e) => set_user_details({ ...user_details, repeat_password: e.target.value })}
                            visiblity_toggleable

                        />

                    }

                    
                    {current_action === "signup" && <PasswordCriteria password={user_details.password} repeat_password={user_details.repeat_password} signup />}

                    {current_action === "recover password" && //email input for recovering a password

                        <Input

                            test_handle="recover_password_email_input"
                            authentication
                            label={"Email address"}
                            placeholder={"Enter your email address"}
                            value={email_for_reset}
                            onChange={(e) => set_email_for_reset(e.target.value)}

                        />

                    }

                </div>

                {/* Response message */}
                <div className={classes.error_wrapper} test_handle="input_error"
                
                style={{ 

                    display: !response && "none", 
                    color: response && response.status < 300 && colours.primary, 
                    borderColor: response && response.status < 300 && colours.primary  
                    
                    }}

                >

                    {response && response.data.message}

                </div>

                {/* Bottom section */}
                <div className={classes.bottom_section}>

                    {/* Login/signup/reset pw button */}
                    <div

                        test_handle="action_button"
                        className={classes.button}
                        style={{ background: button_colour}}
                        onClick={() => button_colour === colours.primary && handle_action_button_click()}
                    >

                        {capitalizeFirstChar(current_action)}

                    </div>

                    {/* Forgot password text */}
                    <div 
                    
                        test_handle="forgot_password" 
                        className={classes.forgot_password} 
                        onClick={() => set_current_action("recover password")} 
                        style={{ display: current_action === "recover password" && "none" }}
                    >

                        Forgot password ?
                        
                        </div>

                </div>

            </div>

        </div>

    )

}

export default Auth_form