import React, { useState } from 'react'

//css
import classes from "./Toggle_icon.module.css"

//assets
import Arrow from "../../../../Assets/Icon/arrow.svg"
import Arrow_white from "../../../../Assets/Icon/arrow-white.svg"
import Arrow_orange from "../../../../Assets/Icon/arrow-orange.svg"

export const Toggle_icon = props => {

    const [image, set_image] = useState(props.selected ? Arrow_white : Arrow)

    return (

        <div className={classes.container}>

            <img

                src={image}
                alt="An arrow to expand the note"
                test_handle="note_toggle_icon"
                className={[classes.arrow, props.expanded && classes.arrow_expanded].join(" ")}
                onClick={() =>  props.expanded ? props.handle_collapse() : props.handle_expand()}
                onMouseEnter={() => !props.selected && window.innerWidth > 500 && set_image(Arrow_orange)} 
                onMouseLeave={() => !props.selected && window.innerWidth > 500  && set_image(Arrow)}

            />

        </div>

    )

}

export default Toggle_icon
