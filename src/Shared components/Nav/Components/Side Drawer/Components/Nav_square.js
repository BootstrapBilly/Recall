import React from 'react'

//css
import classes from "./Nav_square.module.css"

//util
import colours from '../../../../../util/colours'

export const Nav_square = props => {

    return (

            <div className={classes.container} onClick={props.onClick} test_handle={props.test_handle}>

                <img src={require(`../../../../../Assets/Icon/${props.icon}.svg`)} alt={`${props.icon} navigation icon`} className={classes.icon} />
                <div className={classes.text} style={{ color: colours.primary }}>{props.text}</div>

            </div>

    )

}

export default Nav_square