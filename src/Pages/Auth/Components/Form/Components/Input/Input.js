import React from 'react'

//css
import classes from './Input.module.css'
import colours from '../../../../../../util/colours'

export const Input = props => {

    return (

        <div className={classes.container} style={{border:props.focus === props.label && `2px solid ${colours.primary}`}}>
            
            <span className={classes.label} style={{color:colours.primary}}>{props.label}</span>
            <input className={classes.input} type={props.type} onFocus={props.onFocus} onBlur={props.onBlur}/>

        </div>

    )

}

export default Input
