import React from 'react'

//css
import classes from "./Note_thumbnail.module.css"

//util
import capitalize_first from "../../../../../util/capitalize_first"

export const Note_thumbnail = props => {

    return (

        <div className={classes.container} onClick={props.handle_select} style={{background:props.background, color:props.background && "white"}}>
            
            {capitalize_first(props.title)}

        </div>

    )

}

export default Note_thumbnail
