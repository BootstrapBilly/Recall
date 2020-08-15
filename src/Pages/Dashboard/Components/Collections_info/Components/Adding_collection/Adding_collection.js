import React from 'react'

import classes from './Adding_collection.module.css'

//components
import CombineNotes from "../../../../../../Assets/Icon/Combine notes.svg"

export const Adding_collection = () => {

    return (

        <div className={classes.container}>
            
            You can combine notes into a collection by visiting the following menu icon

            <img src={CombineNotes} alt="Combine notes icon" className={classes.icon} />
            
        </div>

    )

}

export default Adding_collection
