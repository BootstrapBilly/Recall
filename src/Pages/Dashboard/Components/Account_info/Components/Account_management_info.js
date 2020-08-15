import React from 'react'

import classes from './Account_management_info.module.css'

//components
import Account from "../../../../../Assets/Icon/Account.svg"

export const Account_management_info = () => {

    return (

        <div className={classes.container}>
            
            You can 
            <ul>

                <li>Change your picture</li>
                <li>Change your username</li>
                <li>Change your password</li>
                <li>Delete your account</li>

            </ul>

            by visiting the following menu icon

            <img src={Account} alt="Add note icon" className={classes.icon} />
            
        </div>

    )

}

export default Account_management_info
