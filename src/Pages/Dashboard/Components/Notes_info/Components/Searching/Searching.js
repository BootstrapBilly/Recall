import React from 'react'

import classes from './Searching.module.css'

//assets
import search from "../../../../../../Assets/Icon/SEARCH-BLUE.svg"

export const Viewing = () => {

    return (

        <div className={classes.container}>

            When viewing your notes, you can search for a specific note by click this icon

            <img src={search} alt="Search icon" className={classes.icon} />
            
        </div>

    )

}

export default Viewing
