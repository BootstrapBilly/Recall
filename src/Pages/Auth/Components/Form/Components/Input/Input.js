import React, { useState, useEffect } from 'react'

//css
import classes from './Input.module.css'
import colours from '../../../../../../util/colours'

//redux action creators
import { clear_response } from "../../../../../../Store/Actions/0_submit_form_action"

//redux hooks
import { useDispatch, useSelector } from "react-redux"

//functions
import handle_error_highlighting from "./Functions/handle_error_highlighting"

export const Input = props => {

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook

    //?Selectors
    const response = useSelector(state => state.form.response)//grab the form response

    //*states
    const [input_focused, set_input_focused] = useState(false)//detect whether the input is focused to highlight it
    const [erroneous_field, set_erroneous_field] = useState(null)//detect whether there is an erroneus field to highlight it red after submission

    //_functions

    const handle_input_focus = () => {

        props.toggle_keyboard_open(true)//call the props toggle keyboard, to move the whole form down on mobile
        set_input_focused(true)//set the input focus true to highlight the field

        if (erroneous_field === props.label) {//if there is an error, and it is this input

            dispatch(clear_response())//clear the response
            set_erroneous_field(null)//and clear the error to remove the red highlight
        }
    }

    const handle_input_blur = () => {

        props.toggle_keyboard_open(false)//call the props toggle keyboard to remove the margin and put the page back to normal
        set_input_focused(false)//set the input focus false to remove the colour from the input
    }

    //if there is a response, call the error highlighting function to highlight any erroneous fields in red
    useEffect(() => {response && handle_error_highlighting(response, set_erroneous_field)}, [response])

    return (

        <div className={classes.container} style={{ border: input_focused ? `1px solid ${colours.primary}` : erroneous_field === props.label && "3px solid red" }}>

            <span className={classes.label} style={{ color: colours.primary }}>{props.label}</span>

            <input
                className={classes.input}
                type={props.type}
                onFocus={() => handle_input_focus()}
                onBlur={() => handle_input_blur()}
                onChange={props.onChange}
                value={props.value}
            />

        </div>

    )

}

export default Input
