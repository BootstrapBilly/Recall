import React from 'react'

import classes from './Request_buttons.module.css'
import colours from '../../../../../../../util/colours'

export const Request_buttons = () => {

    return (

        <div className={classes.container}>

           <div className={classes.button} style={{backgroundColor:colours.red}}>Deny</div>
           <div className={classes.button} style={{backgroundColor:colours.green}}>Accept</div>
            
        </div>

    )

}

export default Request_buttons