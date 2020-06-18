import React ,{useState} from 'react'

//css
import classes from './Input.module.css'
import colours from '../../../../../../util/colours'

export const Input = props => {

    const [focused, set_focused] = useState(false)

    return (

        <div className={classes.container} style={{border:focused && `2px solid ${colours.primary}`}}>
            
            <span className={classes.label} style={{color:colours.primary}}>{props.label}</span>
            <input className={classes.input} type={props.type} onFocus={()=> set_focused(true)} onBlur={()=> set_focused(false)}/>

        </div>

    )

}

export default Input
