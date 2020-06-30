import React from 'react'

//css
import classes from './Body.module.css'

export const Body = props => {

    return (
        <div className={classes.container}>
            
            {props.text}

        </div>
    )

}

export default Body