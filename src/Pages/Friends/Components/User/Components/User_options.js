import React from 'react'
import classes from './User_options.module.css'

//util
import colours from '../../../../../util/colours'

//components
import RequestButtons from "./Components/Request_buttons/Request_buttons"

export const User_options = props => {

    return (

        <div className={classes.container}>

        {props.type === "Pending" && <div className={classes.button} style={{backgroundColor:colours.red}}>Cancel request</div>}

        {props.type === "Request" && <RequestButtons />}

        </div>

    )

}

export default User_options