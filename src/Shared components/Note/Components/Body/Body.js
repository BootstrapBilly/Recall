import React from 'react'

//css
import classes from './Body.module.css'
import colours from '../../../../util/colours'

export const Body = props => {

    return (
        <div className={classes.container} style={{background:colours.white, height:props.value === "" && "22px"}} test_handle="note_body_wrapper">
            
            {props.value //used to set the size of the text area - color is transparent / css hack
            }

            <textarea test_handle="note_body_input" className={classes.text_area} disabled={props.edit_mode ? false : true} style={{background: props.edit_mode && "wheat"}} onChange={props.handle_change.bind(this, "body")} value={props.value}></textarea>

        </div>
    )

}

export default Body