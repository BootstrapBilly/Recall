import React, { useState, useEffect } from 'react'

//css
import classes from "./Syntax.module.css"

//util
import colours from "../../../../util/colours"

//components
import Buttons from "./Components/Buttons"

export const Syntax = props => {

    //*states
    const [edit_enabled, set_edit_enabled] = useState(false)
    const [syntax, set_syntax] = useState(props.syntax)

    const handle_click = () => {

        if (props.edit_mode) { set_edit_enabled(true) }

        else {//not edit mode

            navigator.clipboard.writeText(props.syntax)//copy the syntax to the clipboard
        }

    }

    const handle_cancel_click = () => {

        set_edit_enabled(false)
        set_syntax(props.syntax)

    }

    const handle_save_click = () => {

        set_edit_enabled(false)
        props.handle_syntax_change(syntax)

    }

    useEffect(() => {

        if (props.re_render) {//if the user presses the cancel button, re-render in the parent component is set to true

            set_syntax(props.syntax)//reset the syntax(because they cancelled and did not save)
            props.reset_re_render()//reset the re-render state in the parent mode
        }
        // eslint-disable-next-line
    }, [props.re_render])

    return (

        <React.Fragment>

            {
                edit_enabled ?

                    <div className={classes.editable_container}>

                        <textarea className={classes.textarea} value={syntax} onChange={(event) => set_syntax(event.target.value)}></textarea>

                        <Buttons handle_cancel_click={() => handle_cancel_click()} handle_save_click={() => handle_save_click()} />

                    </div>

                    :

                    <div className={classes.container}>

                        <div

                            className={classes.copy_button}
                            style={{ background: props.edit_mode ? colours.secondary : colours.green }}
                            onClick={() => handle_click()}

                        >

                            {props.missing ? syntax ? "CHANGE CODE" : "ADD SOME CODE" : props.edit_mode ? "CHANGE CODE" : "COPY CODE"}

                        </div>

                    </div>
            }

        </React.Fragment>

    )

}

export default Syntax