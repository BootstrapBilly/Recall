import React from 'react'

import classes from './Viewing.module.css'

//components
import ViewAll from "../../../../../../Assets/Icon/View notes.svg"

export const Viewing = () => {

    return (

        <div className={classes.container}>
            
            You can view your notes and collections by visiting the following menu icon

            <img src={ViewAll} alt="View notes icon" className={classes.icon} />

        </div>

    )

}

export default Viewing
