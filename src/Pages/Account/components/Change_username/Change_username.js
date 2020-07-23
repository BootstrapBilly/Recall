import React from 'react'

import classes from './Change_username.module.css'

//components
import Input from "../../../../Shared components/Input/Input"
import colours from '../../../../util/colours'

export const Change_username = () => {

    return (

        <div className={classes.container}>
            
            <Input placeholder="Enter your new username" label={"New username"}/>
            <Input type={"password"} visiblity_toggleable placeholder="Enter your password" label={"Password"}/>

            <div className={classes.button} style={{background:colours.green}}>Change Username</div>

        </div>

    )

}

export default Change_username
