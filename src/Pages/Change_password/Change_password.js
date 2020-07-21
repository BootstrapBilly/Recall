import React, { useState, useEffect } from 'react'

//css
import classes from './Change_password.module.css'

//components
import Input from "../../Shared components/Input/Input"
import Logo from "../../Shared components/Logo/Logo"
import colours from '../../util/colours'
import PasswordCriteria from "../../Shared components/Password_criteria/Password_criteria"

//util
import validate_password from "../../util/validate_password"

//redux hooks
import {useDispatch, useSelector} from "react-redux"

//redux action creators
import { submit_form, clear_response } from '../../Store/Actions/0_submit_form_action'

//external
import {Redirect} from "react-router-dom"
import alert from "easyalert"

export const Change_password = () => {

    //?selectors
    const response = useSelector(state => state.form.response)

    //-config
    const dispatch = useDispatch()

    //*states
    const [button_colour, set_button_colour] = useState("grey")
    const [redirect, set_redirect] = useState(false)
    const [form_data, set_form_data] = useState({

        password: null,
        repeat_password: null

    })

    //!effects
    useEffect(()=> {

        if(response && response.data.message === "Your password has been updated"){

            dispatch(clear_response())
            set_redirect("/")
            alert("Your password has been changed successfully", "success")
        }

        else if(response && response.status > 400){

            dispatch(clear_response())
            set_redirect("/")
            alert("Your reset link has expired, please request a new one.", "error")
        }

    }, [response])

    const handle_reset_password = () => {

        const url = window.location.href

        const token = url.split("change_password/")[1].split("/?")[0]

        const user_id = url.split("userId=")[1]

        const data = {...form_data, token:token, user_id:user_id}

        return dispatch(submit_form(data, "change_password"))
    }


    //!effects
    useEffect(() => {

        const validation_result = validate_password(form_data.password, form_data.repeat_password)

        if (validation_result.all_met) set_button_colour(colours.primary)

        else set_button_colour("grey")

    }, [form_data])

    return (

        <div className={classes.container}>

            <Logo />

            <span className={classes.title}>Reset Password</span>

            <div className={classes.form_wrapper}>

                <PasswordCriteria password={form_data.password} repeat_password={form_data.repeat_password} />

                <Input

                    test_handle="change_password_input"
                    authentication
                    label={"New password"}
                    placeholder={"Enter your password"}
                    type="password"
                    value={form_data.password}
                    onChange={(e) => set_form_data({ ...form_data, password: e.target.value })}
                    visiblity_toggleable

                />

                <Input

                    test_handle="change_repeat_password_input"
                    authentication
                    label={"Repeat password"}
                    placeholder={"Enter your password"}
                    type="password"
                    value={form_data.repeat_password}
                    onChange={(e) => set_form_data({ ...form_data, repeat_password: e.target.value })}
                    visiblity_toggleable

                />

            </div>

            <div className={classes.reset_button} style={{ background: button_colour }} onClick={() => button_colour === colours.primary && handle_reset_password()}>Update Password</div>

            {redirect && <Redirect to={redirect}/>}

        </div>

    )

}

export default Change_password
