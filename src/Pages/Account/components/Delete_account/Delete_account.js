import React from 'react'

//css
import classes from './Delete_account.module.css'

//components
import Input from "../../../../Shared components/Input/Input"

export const Delete_account = () => {

    return (

        <div className={classes.container}>

            <span className={classes.prompt_text}>Once deleted, your account cannot be recovered. Are you sure ?</span>

            <Input type={"password"} visiblity_toggleable placeholder="Enter your password" label={"Password"}/>

            <div className={classes.button}>Delete my account</div>

            
        </div>

    )

}

export default Delete_account
