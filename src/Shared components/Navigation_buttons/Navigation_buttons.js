import React from 'react'

//css
import classes from './Navigation_buttons.module.css'
import colours from '../../util/colours'


export const Navigation_buttons = props => {

    return (

        <div className={classes.container} style={{width:props.width, marginTop:props.marginTop}}>

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
                onClick={props.type === "back" || props.type ==="back_submit" ? null : props.on_click.bind(this, "next")}
                style={{ border: `3px solid ${props.type === "back" || props.type ==="back_submit" ? "grey" : props.type === "add" ? colours.green : colours.secondary}`, background: props.type === "back" || props.type ==="back_submit" ? "grey" : props.type === "add" ? colours.green : colours.secondary }}>

                {props.type ==="back_submit" || props.type ==="submit" ? "Sign up" : props.type === "skip" ? "Skip" : props.type === "add" ? "Finished" : "Next"}

            </div>

        </div>

    )

}

export default Navigation_buttons