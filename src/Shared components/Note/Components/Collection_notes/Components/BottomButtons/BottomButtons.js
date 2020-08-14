import React from 'react'

//css
import classes from './BottomButtons.module.css'

//util
import colours from '../../../../../../util/colours'


export const BottomButtons = props => {

    return (

        <div className={classes.container}>

            <div className={classes.button} style={{ backgroundColor: colours.primary }}
                onClick={props.enable_rearrange_mode}>Change order of notes</div>

                <div className={classes.button} style={{ backgroundColor: colours.green }} onClick={props.enable_add_new_mode}>Add another note</div>

            <div className={classes.button} style={{ backgroundColor: colours.red }} onClick={props.enable_removal_mode}>Remove notes</div>

        </div>

    )

}

export default BottomButtons
