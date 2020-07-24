import React, { useState, useEffect } from 'react'

import classes from './Change_password_account.module.css'

//components
import Input from "../../../../Shared components/Input/Input"
import PasswordCriteria from "../../../../Shared components/Password_criteria/Password_criteria"

//util
import colours from '../../../../util/colours'

//functions
import validate_password from "../../../../util/validate_password"

//redux hooks
import { useSelector, useDispatch } from "react-redux"

//redux action creators
import { submit_form, clear_response } from '../../../../Store/Actions/0_submit_form_action'

//external
import alert from "easyalert"

export const Change_password = props => {

    //?selectors
    const user_id = useSelector(state => state.auth.user_id)//grab the user_id from redux
    const response = useSelector(state => state.form.response)//grab the response from the api

    //-config
    const dispatch = useDispatch()//initialise the useDispatch hook

    //*states
    const [button_colour, set_button_colour] = useState("grey")//store the colour of the button (manipulated by the effect on line 44)

    const [form_data, set_form_data] = useState({//hold the value of the input fields

        old_password: null,
        password: null,
        repeat_password: null

    })

    //!effects
    useEffect(() => {//this effect is run when the values of the inputs change

        //check if the password and repeat passwords meet the requirements
        const validation_result = validate_password(form_data.password, form_data.repeat_password)

        //if they do, make the button blue so they can submit
        if (validation_result.all_met) set_button_colour(colours.primary)

        //if not make it grey
        else set_button_colour("grey")

    }, [form_data])

    useEffect(() => {//This effect handles a success response after the user changes their password

        if (response && response.data.message === "Password changed successfully") {

            set_form_data({//reset all of the inputs

                old_password: null,
                password: null,
                repeat_password: null

            })

            props.handle_success()//call the prop function to collapse the setting

            dispatch(clear_response())//clear the response

            alert("Password changed successfully", "success")//alert the user
        }

        // eslint-disable-next-line
    }, [response])

    //_functions
    const handle_submit = () => {

        if (button_colour !== colours.primary) return //if the button is not blue, their new password doesn't meet the requirements, so return

        //otherwise, if it matches submit the password change request to the backend
        else dispatch(submit_form({ user_id: user_id, old_password: form_data.old_password, password: form_data.password, repeat_password: form_data.repeat_password }, "change_password_account"))

    }

    return (

        <div className={classes.container} test_handle="change_password_content">

            <Input placeholder={"Enter your old password"} visiblity_toggleable label="Old password" value={form_data.old_password} type="password"
                onChange={(e) => set_form_data({ ...form_data, old_password: e.target.value })} test_handle="old_password_input"
            />

            <Input placeholder={"Enter your new password"} visiblity_toggleable label="New password" value={form_data.password} type="password"
                onChange={(e) => set_form_data({ ...form_data, password: e.target.value })} test_handle="password_input"
            />

            <Input placeholder={"Repeat your new password"} visiblity_toggleable label="Repeat new password" value={form_data.repeat_password} type="password"
                onChange={(e) => set_form_data({ ...form_data, repeat_password: e.target.value })} test_handle="repeat_password_input"
            />

            <PasswordCriteria width="220px" marginRight="-20px" password={form_data.password} repeat_password={form_data.repeat_password} />

            {response && response.status > 400 && <div className={classes.error_message} test_handle="error_message">{response.data.message}</div>}

            <div className={classes.button} style={{ background: button_colour }} onClick={() => handle_submit()} test_handle="change_password_button">Change Password</div>

        </div>

    )

}

export default Change_password
