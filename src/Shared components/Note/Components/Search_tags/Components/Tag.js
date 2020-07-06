import React from 'react'

//css
import classes from "./Tag.module.css"

//util
import colours from "../../../../../util/colours"

export const Tag = props => {

    return (

        <div className={classes.container} style={{ border: `1px solid ${colours.primary}`, color: colours.primary }} onClick={props.edit_mode && props.handle_tag_removal.bind(this, props.text)} >

            {props.text.toUpperCase()}

            {props.edit_mode && <div className={classes.cross} style={{ background: colours.primary }}>X</div>}

        </div>

    )

}

export default Tag
