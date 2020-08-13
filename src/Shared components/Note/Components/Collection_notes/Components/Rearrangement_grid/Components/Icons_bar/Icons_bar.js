import React from 'react'

import classes from './Icons_bar.module.css'

//assets
import Tick from "../../../../../../../../Assets/Icon/tick.svg"
import Cancel from "../../../../../../../../Assets/Icon/cancel.svg"

export const Icons_bar = props => {

    return (

        <div className={classes.container}>

            <div className={classes.icon_container}>

                <img src={Tick} alt="Save Changes" className={classes.icon} onClick={props.handle_save} />
                <span>Save</span>

            </div>

            <div className={classes.icon_container}>


                <img src={Cancel} alt="Cancel Changes" className={classes.icon} onClick={props.handle_cancel}/>
                <span>Cancel</span>

            </div>

        </div>

    )

}

export default Icons_bar
