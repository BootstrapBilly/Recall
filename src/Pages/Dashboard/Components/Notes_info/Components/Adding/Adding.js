import React from 'react'

import classes from './Adding.module.css'

//components
import AddNote from "../../../../../../Assets/Icon/Add a note.svg"

export const Adding = () => {

    return (

        <div className={classes.container}>
            
            You can add a new note by visiting the following menu icon

            <img src={AddNote} alt="Add note icon" className={classes.icon} />
            
        </div>

    )

}

export default Adding
