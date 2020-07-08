import React from 'react'

//css
import classes from "./Input.module.css"

//util
import capitalise_first from "../../../../util/capitalize_first"

export const Input = props => {

    //this function is called to handle when the user clears the input during editing mode
    const handle_empty_value = dimension => {

        if (props.value !== "") return null//if the value is anything other than an empty string, do not overwrite the height

        //otherwise if it is and empty string
        if (dimension === "width") return "1px"//set the width to 1px
        if (dimension === "height") return props.type === "subject" ? "17.5px" : "22px"//and the height, depending on what type of input it is

    }

    /* The following is an input wrapped inside a div, so that when the user selects edit mode, the wrapper div has it's background set to the size of the value inside it, rather than stretching to fill the div
    
    If edit mode is active, the input changes from disabled to not disabled to allow the user to edit the value*/

    const handle_click_input = () => {

        //if they click the "No subject" input, call the parent props function to delete the value and resize it
        if(props.edit_mode && props.type === "subject" && props.value === "No subject") return props.handle_edit_missing_subject()
         
        //if they click the title after it is showing an error from trying to submit a duplicate, call the parent function to remove the red error highlighting
        if(props.edit_mode && props.type === "title" && props.duplicate_title) return props.handle_clear_duplicate_title()

    }

    return (

        <div className={classes.container}

            style={{
                ...props.style,
                background: props.edit_mode && "wheat",
                border:props.duplicate_title && "2px solid red", 
                color: props.edit_mode ? "transparent" : props.color,
                width: handle_empty_value("width"),
                height: handle_empty_value("height")
            }}

            test_handle="input_wrapper"

        >

            {<span>{capitalise_first(props.value)}</span>}

            <input

                test_handle={props.type === "title" ? "note_title" : "note_subject"}
                className={classes.input}
                value={capitalise_first(props.value)}
                disabled={props.edit_mode ? false : true}
                style={{...props.style, color: props.edit_mode ? props.color : "transparent" }}
                onChange={props.handle_change.bind(this, props.type)}
                onClick={()=> handle_click_input()}

            />

        </div>

    )

}

export default Input