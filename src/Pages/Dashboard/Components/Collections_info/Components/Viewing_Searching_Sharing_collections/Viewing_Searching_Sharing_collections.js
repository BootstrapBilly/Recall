import React from 'react'

import classes from './Viewing_Searching_Sharing_collections.module.css'

//components
import ViewAll from "../../../../../../Assets/Icon/View notes.svg"

export const Viewing_Searching_Sharing_collections = () => {

    return (

        <div className={classes.container}>
            
            Collections are found in the same place as notes, you can get there by visiting the following icon

            <img src={ViewAll} alt="View notes icon" className={classes.icon} />

            <span style={{marginTop:"10px"}}>Sharing and searching for them is also the same as a note</span>

        </div>

    )

}

export default Viewing_Searching_Sharing_collections
