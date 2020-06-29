import React, { useState } from 'react'

//css 
import classes from "./Note.module.css"

//util
import capitalizeFirstChar from '../../util/capitalize_first'
import gradients from "../../util/gradients"

//assets
import Arrow from "../../Assets/Icon/arrow.svg"

//components
import Buttons from "./Components/Buttons/Buttons"
import ToggleIcon from "./Components/Toggle_icon/Toggle_icon"
import Body from "./Components/Body/Body"

export const Note_detail = props => {

    //-config
    const main_colour = `#${gradients[props.index].split("#")[1].split(" ")[0]}`

    const [expanded, set_expanded] = useState(false)

    const handle_expand = () => {

        set_expanded(true)
        console.log("called")
    }

    const handle_collapse = () => {

        set_expanded(false)
    }

    return (

        <div className={[classes.container, expanded && classes.container_expanded].join(" ")} style={{ background: gradients[props.index] }}>

            {/* white Overlay/wrapper that makes the gradient a border*/}

            <div className={[classes.wrapper, expanded && classes.wrapper_expanded].join(" ")}></div>

            {/* The information visible when the note is collapsed */}

            <div className={classes.collapsed_content_container}>

                <span className={classes.title}>{capitalizeFirstChar(props.details.title)}</span>

                <span className={classes.subject} style={{color:props.details.subject && main_colour}}>{capitalizeFirstChar(props.details.subject || "No subject")}</span>

            </div>

            {/* The arrow which toggles the menu */}

            <ToggleIcon expanded={expanded} handle_collapse={() => set_expanded(false)} handle_expand={() => set_expanded(true)} />


            {//if the note has been expanded show the following 

                expanded &&

                <div className={classes.expanded_content_container}>

                    <Body color={main_colour} index={props.index} />

                    <Buttons />

                </div>

            }

        </div>


    )

}

export default Note_detail
