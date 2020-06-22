import React from 'react'

//css
import classes from './Navigation_buttons.module.css'
import colours from '../../../../../../util/colours'

export const Navigation_buttons = props => {

    return (

        <div className={classes.container}>

            {props.type !== "next" &&

                <div

                    test_handle="form_back_button"
                    className={[classes.back_button, classes.button].join(" ")}
                    onClick={props.on_click.bind(this, "back")}
                    style={{ border: `3px solid ${colours.primary}`, color: colours.primary }}>

                    Go Back

                </div>

            }

            <div

                test_handle="form_next_button"
                className={[classes.next_button, classes.button].join(" ")}
                onClick={props.type === "back" ? null : props.on_click.bind(this, "next")}
                style={{ border: `3px solid ${props.type === "back" ? "grey" : colours.secondary}`, background: props.type === "back" ? "grey" : colours.secondary }}>

                {props.submit ? "Sign up" : "Next"}

            </div>

        </div>

    )

}

export default Navigation_buttons
