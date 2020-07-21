import React from 'react'

import classes from './Logo.module.css'

//assets
import head from "../../Assets/Icon/logo.svg"

export const Logo = () => {

    return (

        <div className={classes.container}>

            <img src={head} alt="logo" className={classes.logo} />

        </div>

    )

}

export default Logo