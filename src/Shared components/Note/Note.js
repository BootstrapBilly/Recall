import React, { useState, useRef, useEffect } from 'react'

//css
import classes from "./Note.module.css"

//util
import gradients from "../../util/gradients"
import capitalise_first from "../../util/capitalize_first"
import colours from '../../util/colours'

//components
import Buttons from "../Note/Components/Buttons/Buttons"
import Body from "../Note/Components/Body/Body"
import ToggleIcon from "../Note/Components/Toggle_icon/Toggle_icon"

//redux hooks
import { useSelector } from "react-redux"


export const Note = props => {

    //?selectors
    const response = useSelector(state => state.form.response)

    const [expanded, set_expanded] = useState(false)

    const [height, set_height] = useState(0)

    const ref = useRef(null)

    useEffect(() => set_height(ref.current.clientHeight))

    return (

            <div className={classes.container}

                style={{ height: `${height}px`, paddingBottom: expanded && "70px" }}
            >

                <div className={classes.measuring_wrapper} ref={ref} >

                    <div className={classes.collapsed_content}>

                        <div className={classes.title}>{capitalise_first(props.details.title)}</div>
                        <div className={classes.subject}>{capitalise_first(props.details.subject || "No subject")}</div>

                    </div>

                    {expanded &&

                        <div className={classes.expanded_content}>

                            <Body text={props.details.body} />
                            {props.details.syntax && <div className={classes.copy_button} style={{ background: colours.green }}>COPY CODE</div>}
                            <Buttons expanded={expanded} title={props.details.title} reset_expanded={() => set_expanded(false)} />

                        </div>

                    }

                    <ToggleIcon expanded={expanded} handle_collapse={() => set_expanded(false)} handle_expand={() => set_expanded(true)} />

                </div>

            </div>
  

    )

}

export default Note
