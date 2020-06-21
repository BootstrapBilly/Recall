import React from 'react'

//css
import classes from './Navigation_buttons.module.css'
import colours from '../../../../../../util/colours'

export const Navigation_buttons = props => {


    console.log(props.type)
    return (

        <div className={classes.container}>

            {props.type !== "next" &&

                <div

                    className={[classes.back_button, classes.button].join(" ")}
                    onClick={props.on_click.bind(this, "back")}
                    style={{ border: `3px solid ${colours.primary}`, color: colours.primary }}>

                    Go Back

                </div>

            }

            {props.type !== "back" &&

                <div

                    className={[classes.next_button, classes.button].join(" ")}
                    onClick={props.on_click.bind(this, "next")}
                    style={{ border: `3px solid ${colours.secondary}`, background: colours.secondary, }}>

                    {props.type !== "submit" ? "Next" : "Sign up"}

                </div>}

        </div>

    )

}

export default Navigation_buttons
