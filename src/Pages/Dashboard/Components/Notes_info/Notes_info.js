import React from 'react'

import classes from './Notes_info.module.css'
import colours from '../../../../util/colours'

export const Notes_info = () => {

    return (

        <div className={classes.container}>
            
            <div className={classes.section_title} style={{ color: colours.primary }} onClick={() => console.log("the ting")}>What's a note ?</div>

        </div>

    )

}

export default Notes_info
