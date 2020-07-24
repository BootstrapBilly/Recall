import React from 'react'

//css
import classes from './Setting.module.css'

//assets
import Arrow from "../../../../Assets/Icon/down-arrow.svg"

export const Setting = props => {


    return (

        <div className={classes.container} onClick={props.handle_toggle.bind(this, props.text)} test_handle={props.test_handle}>

            <img src={require(`../../../../Assets/Icon/${props.icon}.svg`)} className={classes.icon} alt={"Icon for this option"} />

            <span className={classes.text}>{props.text}</span>

            <img src={Arrow} className={[classes.arrow, props.open && classes.arrow_flipped].join(" ")} alt={"Arrow to select this option"} />

        </div>

    )

}

export default Setting
