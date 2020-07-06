import React from 'react'

//css
import classes from './Buttons.module.css'

//util
import colours from "../../../../../util/colours"

export const Buttons = props => {

    return (

        <div className={classes.container} style={{background: colours.white}}>

            <div className={classes.button} style={{ background: "#ff3333" }} test_handle="syntax_cancel_button"

                onClick={props.handle_cancel_click}>

                CANCEL

            </div>

            <div className={classes.button} style={{ background: colours.green}} test_handle="syntax_save_button"

                onClick={props.handle_save_click}>

                SAVE

            </div>

        </div>

    )

}

export default Buttons