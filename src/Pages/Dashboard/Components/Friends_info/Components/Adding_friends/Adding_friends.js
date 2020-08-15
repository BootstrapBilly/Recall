import React from 'react'

import classes from './Adding_friends.module.css'

//components
import AddFriend from "../../../../../../Assets/Icon/Friends.svg"

export const Adding_friends = () => {

    return (

        <div className={classes.container}>
            
            You can add a new friend by visiting the following menu icon

            <img src={AddFriend} alt="Add note icon" className={classes.icon} />
            
        </div>

    )

}

export default Adding_friends
