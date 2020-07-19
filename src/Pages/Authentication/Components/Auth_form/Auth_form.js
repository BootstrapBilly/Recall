import React, { useState, useEffect } from 'react'

import classes from './Auth_form.module.css'

//components
import BackArrow from "../../../../Shared components/Back_arrow/Back_arrow"
import Logo from "./Components/Logo/Logo"
import Input from "../../../../Shared components/Input/Input"

//util
import colours from '../../../../util/colours'
import capitalizeFirstChar from '../../../../util/capitalize_first'

//redux hooks
import { useDispatch, useSelector } from "react-redux"

//redux action creators
import { submit_form } from "../../../../Store/Actions/0_submit_form_action"



export const Auth_form = props => {

    //-config
    const dispatch = useDispatch()

    //?selectors
    const response = useSelector(state => state.form.response)

    //*states
    const [current_action, set_current_action] = useState("signup")
    const [user_details, set_user_details] = useState({//stores the user details and controls each input in the form
        email: "",
        username: "",
        password: "",
        repeat_password: ""
    })

    const handle_action_button_click = () => {

        dispatch(submit_form(user_details, current_action === "login" ? "login" : "user"))

    }


    return (

        <div className={classes.container}>

            <div className={classes.form_wrapper}>

                <BackArrow onClick={props.handle_go_back} />

                <div className={classes.logo_container}>

                    <Logo />

                </div>

                <div className={classes.prompt_container}>

                    <span className={classes.current_action}>{capitalizeFirstChar(current_action)}</span>

                    <span
                        className={classes.switch_action_text}
                        onClick={() => set_current_action(current_action === "login" ? "signup" : "login")}
                    >
                        {current_action === "login" ? "Need to create an account ? Sign up" : "Already have an account ? Log in"}

                    </span>

                </div>

                <div className={classes.input_container}>

                    <Input

                        authentication
                        label={current_action === "login" ? "Username or email" : "Email address"}
                        placeholder={"Example@test.com"}
                        value={user_details.email}
                        onChange={(e) => set_user_details({ ...user_details, email: e.target.value })}

                    />

                    {current_action === "signup" &&

                        <Input

                            authentication
                            label={"Username"}
                            placeholder={"Johndoe12"}
                            value={user_details.username}
                            onChange={(e) => set_user_details({ ...user_details, username: e.target.value })}

                        />

                    }

                    <Input

                        authentication
                        label={"Password"}
                        placeholder="Enter your password"
                        type="password"
                        value={user_details.password}
                        onChange={(e) => set_user_details({ ...user_details, password: e.target.value })}

                    />


                    {current_action === "signup" &&

                        <Input

                            authentication
                            label={"Repeat password"}
                            type="password"
                            placeholder={"Enter your password"}
                            value={user_details.repeat_password}
                            onChange={(e) => set_user_details({ ...user_details, repeat_password: e.target.value })}

                        />

                    }

                </div>

                {/* Error message */}
                <div className={classes.error_wrapper} style={{ display: !response && "none" }}>

                    {response && response.data.message}

                </div>

                <div className={classes.bottom_section}>

                    <div className={classes.button} style={{ background: colours.primary }} onClick={() => handle_action_button_click()}>{capitalizeFirstChar(current_action)}</div>

                    <div className={classes.forgot_password}>Forgot password ?</div>

                </div>

            </div>

        </div>

    )

}

export default Auth_form