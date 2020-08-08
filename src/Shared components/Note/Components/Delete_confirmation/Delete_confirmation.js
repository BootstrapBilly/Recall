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
import { submit_form } from '../../../../Store/Actions/0_submit_form_action'

export const Delete_confirmation = props => {

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook

    //?selectors
    const user_id = useSelector(state => state.auth.user_id)//grab the userid from redux

    const handle_click_delete = () => {//this is called when the user clicks the confirm button

        if (props.example) {//if this note is an example (the one on the landing page)

            //show an alert
            alert("This note is an example and cannot be deleted", "info")

            return props.cancel_delete()//and do not delete it

        }

        else if (props.has_been_granted) return dispatch(submit_form({user_id:props.details.created_by._id, friend_id:user_id, note_or_process_id: props.details._id, type:props.details.notes ? "process" : "note" }, "remove_access"))

        //otherwise if its a normal note delete it
        else return handle_delete_click(dispatch, props.title, props.note_id, props, props.is_a_collection, user_id)

    }

    return (

        <div className={classes.container}>

            {props.is_a_collection ?

                <span className={classes.prompt_text}>You are about to delete this collection, the notes inside will not be deleted.</span>

                : props.has_been_granted ?

                    <span className={classes.prompt_text}>You are about to hide this note, if you wish to see it again, it will need to be shared again by the owner.</span>

                    : <span className={classes.prompt_text}>You are about to delete this note and remove it from any collections which have it as a step.</span>

            }

            <span className={classes.are_you_sure} style={{ color: colours.secondary }}>Are you sure ?</span>

            <div className={classes.button_container}>

                <div test_handle="cancel_delete" className={classes.button} style={{ background: colours.primary }} onClick={props.cancel_delete}>NO - GO BACK</div>
                <div test_handle="confirm_delete" className={classes.button} style={{ background: "#ff3333" }} onClick={() => handle_click_delete()}>YES - {props.has_been_granted ? "HIDE" : "DELETE"} IT</div>

            </div>

        </div>

    )

}

export default Delete_confirmation
