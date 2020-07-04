import React from 'react'

//css
import classes from "./Buttons.module.css"

//util
import colours from "../../../../util/colours"

//redux action creators
import { submit_form } from "../../../../Store/Actions/0_submit_form_action"

//redux hooks
import { useDispatch } from "react-redux"

export const Buttons = props => {

    const dispatch = useDispatch()

    const handle_delete = () => {

        props.reset_expanded()
        dispatch(submit_form({ user_id: "5eecd941331a770017a74e44", title: props.title }, "delete_note"))
    }

    return (

        <div className={classes.container}>

            <div className={classes.buttons} style={{ visibility: !props.expanded && "hidden" }}>

                <div className={classes.button} style={{ background: "#ff3333" }} test_handle={props.edit_mode ? "note_cancel_button" : "note_delete_button"}

                    onClick={props.edit_mode ? props.handle_cancel_click : () => handle_delete()}>
                    {props.edit_mode ? "CANCEL" : "DELETE"}

                </div>

                <div className={classes.button} style={{ background: props.edit_mode ? colours.green : colours.secondary }} test_handle={props.edit_mode ? "note_save_button" : "note_edit_button"}

                    onClick={props.edit_mode ? props.handle_save_click: props.handle_edit_click}>
                    {props.edit_mode ? "SAVE" : "EDIT"}

                </div>

            </div>


        </div>

    )

}

export default Buttons
