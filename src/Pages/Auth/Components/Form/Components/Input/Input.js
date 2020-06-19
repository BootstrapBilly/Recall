import React, {useState} from 'react'

//css
import classes from './Input.module.css'
import colours from '../../../../../../util/colours'

export const Input = props => {

    const [input_focused, set_input_focused] = useState(false)

    const handle_input_focus = () => {

        props.toggle_keyboard_open(true)
        set_input_focused(true)
    }

    const handle_input_blur = () => {

        props.toggle_keyboard_open(false)
        set_input_focused(false)
    }

    return (

        <div className={classes.container} style={{border:input_focused ? `1px solid ${colours.primary}` : props.error_type === props.label && "3px solid red"}}>
            
            <span className={classes.label} style={{color:colours.primary}}>{props.label}</span>

            <input className={classes.input} type={props.type} 
            onFocus={()=> handle_input_focus()} onBlur={()=> handle_input_blur()} 
            onChange={props.onChange}/>

        </div>

    )

}

export default Input
