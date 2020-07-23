import React from 'react'

import classes from './Change_password.module.css'

//components
import Input from "../../../../Shared components/Input/Input"
import PasswordCriteria from "../../../../Shared components/Password_criteria/Password_criteria"

//util
import colours from '../../../../util/colours'

export const Change_password = props => {

    return (

        <div className={classes.container}>
            
            <Input placeholder={"Enter your old password"} visiblity_toggleable label="Old password" />
            <Input placeholder={"Enter your new password"} visiblity_toggleable label="New password"/>
            <Input placeholder={"Repeat your new password"} visiblity_toggleable label="Repeat new password" />

            <PasswordCriteria width="220px" marginRight="-20px"/>

            <div className={classes.button} style={{background:colours.primary}}>Change Password</div>

        </div>

    )

}

export default Change_password
