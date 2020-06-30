import React from 'react'

//css
import classes from './Body.module.css'
import colours from '../../../../util/colours'

export const Body = props => {

    return (
        <div className={classes.container} style={{background:colours.white}}>
            
            {props.text}

        </div>
    )

}

export default Body