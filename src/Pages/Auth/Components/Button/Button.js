import React from 'react'

//css
import classes from "./Button.module.css"


export const Button = props => {

    return (

        <div className={classes.container} style={{backgroundColor:props.background_color}}>
            
            <img src={require(`../../../../Assets/Icon/${props.icon_name}`)} alt="An icon" className={classes.icon} />
            <span className={classes.text}>{props.text}</span>

        </div>
    )

}

export default Button
