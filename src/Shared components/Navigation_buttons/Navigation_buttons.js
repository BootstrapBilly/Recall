import React from 'react'

//css
import classes from './Navigation_buttons.module.css'
import colours from '../../util/colours'


export const Navigation_buttons = props => {

    return (

        <div className={classes.container} style={{ width: props.width, marginTop: props.marginTop }}>

            {props.type !== "next" && props.type !== "success" &&

                <div

                    test_handle="form_back_button"
                    className={[classes.back_button, classes.button].join(" ")}
                    onClick={props.on_click.bind(this, "back")}
                    // eslint-disable-next-line
                    style={{ border: `3px solid ${colours.primary}`, color: colours.primary, display:props.type === "next" || props.type === "grey_next" && "none" }}>

                    Go Back

                </div>

            }

            {props.type !== "success" &&

                <div

                    test_handle="form_next_button"
                    className={[classes.next_button, classes.button].join(" ")}
                    onClick={props.type === "back" || props.type === "back_submit" ? null : props.on_click.bind(this, "next")}
                    style={{ border: `3px solid ${props.type === "back" || props.type === "back_submit" || props.type === "grey_next" ? "grey" : props.type === "add" ? colours.green : colours.secondary}`, background: props.type === "back" || props.type === "back_submit" || props.type === "grey_next" ? "grey" : props.type === "add" ? colours.green : colours.secondary }}>

                    {props.type === "back_submit" || props.type === "submit" ? "Sign up" : props.type === "skip" ? "Skip" : props.type === "add" ? "Finished" : "Next"}

                </div>
            }

            {props.type === "success" &&

                <div

                    test_handle="form_reset_button"
                    className={[classes.reset_button, classes.button].join(" ")}
                    onClick={props.handle_reset}
                    style={{background:colours.green}}
                    >

                    Add Another

                </div>}

        </div>

    )

}

export default Navigation_buttons
