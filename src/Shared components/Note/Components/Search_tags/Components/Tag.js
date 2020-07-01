import React from 'react'

//css
import classes from "./Tag.module.css"

//util
import colours from '../../../../../util/colours'

export const Tag = props => {

    return (

        <div className={classes.container} style={{border:`1px solid ${colours.primary}`, color:colours.primary}}>
            
            {props.text.toUpperCase()}

        </div>

    )

}

export default Tag
