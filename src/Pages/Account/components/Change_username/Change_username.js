import React, { useState, useEffect } from 'react'

import classes from './Change_username.module.css'

//components
import Input from "../../../../Shared components/Input/Input"
import colours from '../../../../util/colours'

//redux hooks
import { useDispatch, useSelector } from "react-redux"

//redux action creators
import { submit_form, clear_response } from '../../../../Store/Actions/0_submit_form_action'

//external
import alert from "easyalert"


export const Change_username = props => {

    //?selectors
    const user_id = useSelector(state => state.auth.user_id)//grab the userid from redux
    const response = useSelector(state => state.form.response)//grab the response from the api

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook

    //*states
    const [button_colour, set_button_colour] = useState("grey")//determine the colour of the button

    const [form_data, set_form_data] = useState({//hold the input values

        username: null,
        password: null

    })

    //!effects

    useEffect(() => {//this effect is run when the values of the inputs change

        //if the username and password fields are populated, make the button blue so they can submit
        if (form_data.username && form_data.password) set_button_colour(colours.green)

        //if not make it grey
        else set_button_colour("grey")

    }, [form_data])


    useEffect(() => {

        if (response && response.data.message === "Username updated successfully") {//This effect handles a success response after the user changes their username

            //update their username in local storage so it will display instantly in the nav side panel
            window.localStorage.setItem("username", form_data.username)

            set_form_data({//reset all of the inputs

                username: null,
                password: null

            })

            props.handle_success()//call the prop function to collapse the setting

            dispatch(clear_response())//clear the response

            alert("Username changed successfully", "success")//alert the user
        }
        // eslint-disable-next-line
    }, [response])

    //_functions
    const handle_submit = () => {

        if (button_colour !== colours.green) return//if the button is not blue,the inputs are not populated, so return

        //otherwise, if the inputs are populated, send a change username request to the backend
        dispatch(submit_form({ user_id: user_id, password: form_data.password, username: form_data.username }, "change_username"))

    }

    return (

        <div className={classes.container} test_handle={"change_username_content"}>

            <Input placeholder="Enter your new username" label={"New username"} value={form_data.username} test_handle="new_username_input"
                onChange={(e) => set_form_data({ ...form_data, username: e.target.value })}
            />

            <Input type={"password"} visiblity_toggleable placeholder="Enter your password" label={"Password"} value={form_data.password}
                onChange={(e) => set_form_data({ ...form_data, password: e.target.value })} test_handle="password_input"
            />

            <div test_handle="change_username_button" className={classes.button} style={{ background: button_colour }} onClick={() => handle_submit()}>Change Username</div>

            {response && response.status > 400 && <div className={classes.error_message} test_handle="error_message" >{response.data.message}</div>}

        </div>

    )

}

export default Change_username
