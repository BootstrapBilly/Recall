import React from 'react'

//css
import classes from "./Input.module.css"

//util
import capitalise_first from "../../../../util/capitalize_first"

export const Input = props => {

    const handle_empty_value = dimension => {

        if (props.value !== "") return null

        if (dimension === "width") return "1px"
        if (dimension === "height") return props.type === "subject" ? "17.5px" : "22px"

    }

    return (

        <div className={classes.container} style={{ background: props.edit_mode && "wheat", ...props.style, color: "transparent", width: handle_empty_value("width"), height: handle_empty_value("height") }} test_handle="input_wrapper">

            {props.value}

            <input
                test_handle={props.type === "title" ? "note_title" : "note_subject"}
                className={[classes.input].join(" ")}
                value={capitalise_first(props.value)}
                disabled={props.edit_mode ? false : true}
                style={props.style}
                onChange={props.handle_change.bind(this, props.type)}
                onClick={props.edit_mode && props.type === "subject" && props.value === "No subject" && props.handle_edit_missing_subject}
            />

        </div>

    )

}

export default Input