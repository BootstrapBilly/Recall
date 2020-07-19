import React, { useState, useEffect } from 'react'

//css
import classes from './Input.module.css'
import colours from '../../util/colours'

//redux hooks
import { useDispatch, useSelector } from "react-redux"

//functions
import handle_error_highlighting from "./Functions/handle_error_highlighting"
import handle_text_area_change from "../../util/handle_text_area_autosize"
import handle_input_focus from "./Functions/handle_input_focus"

//util
import { input_style, textarea_style } from "./add_new_alternative_styles"

export const Input = props => {

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook

    //?Selectors
    const response = useSelector(state => state.form.response)//grab the form response

    //*states
    const [input_focused, set_input_focused] = useState(false)//detect whether the input is focused to highlight it
    const [erroneous_field, set_erroneous_field] = useState(null)//detect whether there is an erroneus field to highlight it red after submission
    const [text_area_dimensions, set_text_area_dimensions] = useState({ rows: 5, minRows: 5, maxRows: 15 })//state to handle the dynamic sizing of the textarea

    //!Effects
    //if there is a response, call the error highlighting function to highlight any erroneous fields in red
    useEffect(() => { response && handle_error_highlighting(response, set_erroneous_field) }, [response])


    return (

        <div className={classes.container}

            style={

                input_style(props, input_focused, colours)//The input is used on the add new screen, inject the styles from the alt styles file

            }

        >

            <span

                test_handle="form_input_label"
                className={classes.label}
                style={{ color: props.grey ? "grey" : colours.primary, display: !props.label && "none" }}

            >
                {props.label} {/* Display the label inside the input (Not rendered on the add new form - except the optionals page)*/}

            </span>

            {props.text_area ? //if the input type (from props) is a text area, render a text area

                <textarea

                    rows={text_area_dimensions.rows}//expand the rows automatically based on height
                    test_handle={props.test_handle}
                    value={props.value || ""}
                    type="text"
                    className={classes.text_area}
                    onChange={(e) => handle_text_area_change(e, text_area_dimensions, set_text_area_dimensions, props)}
                    placeholder={`e.g. ${props.placeholder}`}
                    onFocus={() => handle_input_focus(props, set_input_focused, erroneous_field, set_erroneous_field, dispatch)}
                    onBlur={() => set_input_focused(false)}
                    style={textarea_style(props, input_focused, colours)}//Inject the styles from the add_new alt styles

                >

                </textarea>

                : //otherwise if the props input type is an input, display an input

                <input

                    test_handle={props.test_handle}
                    className={classes.input}
                    type={props.type ? props.type : "text"}
                    onFocus={() => handle_input_focus(props, set_input_focused, erroneous_field, set_erroneous_field, dispatch)}
                    onBlur={() => set_input_focused(false)}
                    onChange={props.onChange}
                    value={props.value || ""}
                    placeholder={props.authentication ? props.placeholder === "none" ? undefined : props.placeholder : `e.g. ${props.placeholder}`}
                />

            }

        </div>

    )

}

export default Input
