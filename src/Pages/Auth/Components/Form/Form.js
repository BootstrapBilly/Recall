import React, { useState, useEffect } from 'react'

//css
import classes from './Form.module.css'

//components
import Input from "./Components/Input/Input"
import Button from "./Components/Button/Button"

//redux hooks
import { useSelector } from "react-redux"

export const Form = props => {

    //?Selectors
    const response = useSelector(state => state.form.response)

    //*states
    const [keyboard_open, set_keyboard_open] = useState(false)//detect whether the keyboard is open, and move the form down (for mobile)

    const [user_details, set_user_details] = useState({//stores the user details and controls each input in the form
        email: "",
        username: "",
        password: "",
        repeat_password: ""
    })


    return (

        <div className={[classes.container, !props.form_type && classes.container_hidden, keyboard_open && classes.container_focused].join(" ")}>

            <Input

                label={props.form_type === "login" ? "EMAIL OR USERNAME" : "EMAIL"}
                type={"text"}
                onChange={(e) => set_user_details({ ...user_details, email: e.target.value })}
                toggle_keyboard_open={() => set_keyboard_open(!keyboard_open)}
            />

            {props.form_type === "signup" &&

                <Input

                    label={"USERNAME"}
                    type={"text"}
                    onChange={(e) => set_user_details({ ...user_details, username: e.target.value })}
                    toggle_keyboard_open={(status) => set_keyboard_open(status)}
                />
            }

            <Input

                label={"PASSWORD"}
                type={"password"}
                onChange={(e) => set_user_details({ ...user_details, password: e.target.value })}
                toggle_keyboard_open={() => set_keyboard_open(!keyboard_open)}
            />

            {props.form_type === "signup" &&

                <Input

                    label={"REPEAT PASSWORD"}
                    type={"password"}
                    onChange={(e) => set_user_details({ ...user_details, repeat_password: e.target.value })}
                    toggle_keyboard_open={() => set_keyboard_open(!keyboard_open)}
                />
            }

            <Button text={props.form_type === "signup" ? "SIGN UP" : "LOG IN"} onClick={props.handle_submit.bind(this, user_details)} />

            <span className={classes.error_message}>{response && response.data.message}</span>

        </div>

    )

}

export default Form

