import React, {useState, useEffect} from 'react'

import classes from "./Wake_up_screen.module.css"

//assets
import Spinner from "./Assets/Spinners/Photo_spinner.svg"
import colours from './util/colours'

export const Wake_up_screen = () => {

    const [countdown, set_countdown] = useState(10)

    useEffect(()=>{

        setTimeout(() => {
            
            set_countdown(countdown - 1)
            
        }, 1000);
    })

    return (

        <div className={classes.container}>

            <span className={classes.text}>Please bare with us until the Heroku server wakes up</span>

            <span className={classes.number} style={{color:colours.primary}}>{countdown}</span>

            <img src={Spinner} alt="loading icon" className={classes.spinner} />

        </div>

    )

}

export default Wake_up_screen