import React, { useState, useEffect } from 'react'

//css
import classes from './Delete_account.module.css'

//components
import Input from "../../../../Shared components/Input/Input"

//redux hooks
import { useDispatch, useSelector } from "react-redux"

//redux action creators
import { submit_form, clear_response } from '../../../../Store/Actions/0_submit_form_action'

//external
import { Redirect } from "react-router-dom"
import alert from "easyalert"
import { handle_logout } from '../../../../Store/Actions/2_authentication_action'

export const Delete_account = () => {

    //?selectors
    const response = useSelector(state => state.form.response)//grab the response from the api

    const user_id = useSelector(state => state.auth.user_id)//grab the userid from redux

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook

    //*states
    const [password, set_password] = useState(null)//hold the password input value
    const [redirect, set_redirect] = useState(false)//set upon a success response to redirect the user to the landing page

    //submit the delete request to the backend
    const handle_click = () => dispatch(submit_form({ user_id: user_id, password: password }, "delete_user"))

    useEffect(() => {//this effects listens for a sucessful deletion response

        if (response && response.data.message === "Account deleted") {

            set_redirect("/")//redirect them to the landing page

            dispatch(handle_logout())//remove their local storage data

            dispatch(clear_response())//clear the response

            alert("Your account has been deleted", "success")//alert them
        }
        // eslint-disable-next-line
    }, [response])

    return (

        <div className={classes.container} test_handle={"delete_account_content"}>

            <span className={classes.prompt_text}>Once deleted, your account cannot be recovered. Are you sure ?</span>

            <Input type={"password"} visiblity_toggleable placeholder="Enter your password" label={"Password"} value={password}
                onChange={(e) => set_password(e.target.value)} test_handle="password_input"
            />

            {response && response.status > 400 && <div className={classes.error_message} test_handle="error_message">{response.data.message}</div>}

            <div className={classes.button} onClick={() => handle_click()} test_handle="delete_account_button">Delete my account</div>

            {redirect && <Redirect to={redirect} />}

        </div>

    )

}

export default Delete_account
