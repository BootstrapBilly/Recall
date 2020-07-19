import React from 'react'

import classes from './Back_arrow.module.css'

//assets
import left_arrow from "../../Assets/Icon/left-arrow.svg"

export const Back_arrow = props => {

    return (

        <div className={classes.container} onClick={props.onClick}>

            <img src={left_arrow} alt="back_arrow" className={classes.back_arrow} />
            <span className={classes.back_text}>Back</span>

        </div>
    )

}

export default Back_arrow
