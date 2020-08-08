import React from 'react'

//css
import classes from "./Buttons.module.css"

//util
import colours from "../../../../util/colours"


export const Buttons = props => {

    console.log(props.has_been_granted)

    return (

        <div className={classes.container}>

            {props.has_been_granted ?

                <div className={classes.granted_button} style={{ background: "#ff3333" }} test_handle={"Remove_access_button"}

                    onClick={props.handle_remove_access}>
                    I don't want to see this

                </div>

                :

                <div className={classes.buttons} style={{ visibility: !props.expanded && "hidden" }}>

                    <div className={classes.button} style={{ background: "#ff3333" }} test_handle={props.edit_mode ? "note_cancel_button" : "note_delete_button"}

                        onClick={props.edit_mode ? props.handle_cancel_click : props.handle_delete_click.bind(this, props.title)}>
                        {props.edit_mode ? "CANCEL" : "DELETE"}

                    </div>

                    <div className={classes.button} style={{ background: props.edit_mode ? colours.green : colours.primary }} test_handle={props.edit_mode ? "note_save_button" : "note_edit_button"}

                        onClick={props.edit_mode ? props.handle_save_click : props.handle_edit_click}>
                        {props.edit_mode ? "SAVE" : "EDIT"}

                    </div>

                </div>}


        </div>

    )

}

export default Buttons
