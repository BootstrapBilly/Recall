import React from 'react'

import classes from './Friends_explained.module.css'

//components
import User from "../../../../../../Pages/Friends/Components/User/User"

export const Friends_explained = () => {

    return (

        <div className={classes.container}>

           <p>You and your friends can share notes with eachother, so you can benefit from eachother's code snippets</p>

           <div className={classes.user_container}> <User details={{username:"John"}} example /></div>

        </div>

    )

}

export default Friends_explained
