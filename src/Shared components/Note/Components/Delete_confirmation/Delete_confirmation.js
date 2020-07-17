import React from 'react'

//css
import classes from './Delete_confirmation.module.css'

//util
import colours from '../../../../util/colours'

//redux hooks
import { useDispatch } from "react-redux"

//functions
import handle_delete_click from "./Function/handle_delete_click"

export const Delete_confirmation = props => {

    //config
    const dispatch = useDispatch()

    return (

        <div className={classes.container}>

            <span className={classes.prompt_text}>You are about to delete this note and remove it from all collections which have it as a step.</span>
            <span className={classes.are_you_sure} style={{ color: colours.primary }}>Are you sure ?</span>

            <div className={classes.button_container}>

                <div className={classes.button} style={{ background: colours.secondary }} onClick={props.cancel_delete}>NO - GO BACK</div>
                <div className={classes.button} style={{ background: "#ff3333" }} onClick={() => handle_delete_click(dispatch, props.title, props.note_id, props, props.is_a_collection)}>YES - DELETE IT</div>

            </div>

        </div>

    )

}

export default Delete_confirmation
