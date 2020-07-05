import React from 'react'

//css
import classes from "./Toggle_icon.module.css"

//assets
import Arrow from "../../../../Assets/Icon/arrow.svg"

export const Toggle_icon = props => {

    return (

        <div className={classes.container} onClick={() => props.expanded ? props.handle_collapse() : props.handle_expand()}>

            <img
            
                src={Arrow}
                alt="An arrow to expand the note"
                test_handle="note_toggle_icon"
                className={[classes.arrow, props.expanded && classes.arrow_expanded].join(" ")}

            />

        </div>

    )

}

export default Toggle_icon
