import React from 'react'

//css
import classes from "./Button.module.css"

//util
import colours from '../../../../../../util/colours'

export const Button = props => {

    return (

        <div className={classes.container} style={{background:colours.primary}} onClick={props.onClick}>
            
            <span className={classes.text}>{props.text}</span>

        </div>

    )

}

export default Button