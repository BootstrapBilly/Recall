import React from 'react'

//css
import classes from './Body.module.css'
import colours from '../../../../util/colours'

export const Body = props => {

    /* The following is an textarea wrapped inside a div, so that when the user selects edit mode, the wrapper div has it's background set to the size of the value inside it, rather than stretching to fill the div
 
If edit mode is active, the textarea changes from disabled to not disabled to allow the user to edit the value*/

    return (
        <div className={classes.container} style={{ background: colours.white, height: props.value === "" && "22px", maxHeight:props.re_arrange && "30px" }} test_handle="note_body_wrapper">

            {props.value //used to set the size of the text area - color is transparent / css hack
            }

            <textarea

                test_handle="note_body_input"
                className={classes.text_area}
                disabled={props.edit_mode ? false : true}
                style={{ background: props.edit_mode && "wheat" }}
                onChange={props.handle_change.bind(this, "body")}
                value={props.value}>

            </textarea>

        </div>
    )

}

export default Body