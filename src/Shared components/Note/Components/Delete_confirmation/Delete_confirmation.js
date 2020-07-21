import React from 'react'

//css
import classes from './Delete_confirmation.module.css'

//util
import colours from '../../../../util/colours'

//redux hooks
import { useDispatch, useSelector } from "react-redux"

//functions
import handle_delete_click from "./Function/handle_delete_click"

//external
import alert from "easyalert"

export const Delete_confirmation = props => {

    //_config
    const dispatch = useDispatch()

    //?selectors
    const user_id = useSelector(state => state.auth.user_id)

    console.log(props.example)

    const handle_click_delete = () => {

        if (props.example) {

            alert("This note is an example and cannot be deleted", "info")

            return props.cancel_delete()

        }

        else return handle_delete_click(dispatch, props.title, props.note_id, props, props.is_a_collection, user_id)

    }

    return (

        <div className={classes.container}>

            {props.is_a_collection ?

                <span className={classes.prompt_text}>You are about to delete this collection, the notes inside will not be deleted.</span>

                : <span className={classes.prompt_text}>You are about to delete this note and remove it from any collections which have it as a step.</span>

            }

            <span className={classes.are_you_sure} style={{ color: colours.secondary }}>Are you sure ?</span>

            <div className={classes.button_container}>

                <div test_handle="cancel_delete" className={classes.button} style={{ background: colours.primary }} onClick={props.cancel_delete}>NO - GO BACK</div>
                <div test_handle="confirm_delete" className={classes.button} style={{ background: "#ff3333" }} onClick={() => handle_click_delete()}>YES - DELETE IT</div>

            </div>

        </div>

    )

}

export default Delete_confirmation
