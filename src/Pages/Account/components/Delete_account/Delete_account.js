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
    const response = useSelector(state => state.form.response)
    const user_id = useSelector(state => state.auth.user_id)

    //-config
    const dispatch = useDispatch()

    //*states
    const [password, set_password] = useState(null)
    const [redirect, set_redirect] = useState(false)

    const handle_click = () => {

        dispatch(submit_form({ user_id: user_id, password: password }, "delete_user"))

    }

    useEffect(() => {

        if (response && response.data.message === "Account deleted") {

            set_redirect("/")

            dispatch(handle_logout())

            dispatch(clear_response())

            alert("Your account has been deleted", "success")
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
