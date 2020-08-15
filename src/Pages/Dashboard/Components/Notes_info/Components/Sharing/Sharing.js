import React from 'react'

import classes from './Sharing.module.css'

//components
import Share from "../../../../../../Shared components/Note/Components/Share_with_friend/Share_with_friend"

export const Sharing = () => {

    return (

        <div className={classes.container}>
            
            You can share your notes with friends by clicking this icon at the top of a note

            <Share style={{position:"relative", width:"70px", margin:"auto"}}/>

        </div>

    )

}

export default Sharing
