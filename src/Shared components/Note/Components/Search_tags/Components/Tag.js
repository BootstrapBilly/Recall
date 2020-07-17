import React from 'react'

//css
import classes from "./Tag.module.css"

//util
import colours from "../../../../../util/colours"

export const Tag = props => {

    return (

        <div

            test_handle={`${props.text.toUpperCase()}`}
            className={classes.container}
            style={{ border: `1px solid ${props.selected ? "white" : colours.secondary}`, color: props.selected ? "white" : colours.secondary }}
            onClick={props.edit_mode && props.handle_tag_removal.bind(this, props.text)}

        >

            {props.text.toUpperCase()}

            {/* If edit mode is enabled, show a cross to tell the user they can delete it */}
            {props.edit_mode && <div className={classes.cross} style={{ background: colours.secondary }}>X</div>}

        </div>

    )

}

export default Tag
