import React, { useState, useEffect } from 'react'

//css
import classes from './Form.module.css'

//components
import Input from "./Components/Input/Input"
import Button from "./Components/Button/Button"

export const Form = props => {

    //*states
    const [keyboard_open, set_keyboard_open] = useState(false)//dete
    const [error_type, set_error_type] = useState(null)
    

    const [user_details, set_user_details] = useState({//stores the user details and controls each input in the form
        email: "",
        username: "",
        password: "",
        repeat_password: ""
    })



    //!effects

    useEffect(() => {

        if (props.error_type) {

            switch (props.error_type) {

                case "Sorry, that email does not exist in our database":
                    return set_error_type("EMAIL OR USERNAME")
                case "Sorry, your password is incorrect":
                    return set_error_type("PASSWORD")
                default: return;
            }
        }
    }, [props.error_type])


    return (

        <div className={[classes.container, !props.form_type && classes.container_hidden, keyboard_open && classes.container_focused].join(" ")}>

            <Input

                label={props.form_type === "login" ? "EMAIL OR USERNAME" : "EMAIL"}
                type={"text"}
                value={user_details.email}

                onChange={(e) => set_user_details({ ...user_details, email: e.target.value })}
                error_type={error_type}

                toggle_keyboard_open={()=> set_keyboard_open(!keyboard_open)}
            />

            {props.form_type === "signup" &&

                <Input

                    label={"USERNAME"}
                    type={"text"}
                    value={user_details.username}
                    onChange={(e) => set_user_details({ ...user_details, username: e.target.value })}
                    error_type={error_type}

                    toggle_keyboard_open={(status)=> set_keyboard_open(status)}
                />}

            <Input

                label={"PASSWORD"}
                type={"password"}
                value={user_details.password}

                onChange={(e) => set_user_details({ ...user_details, password: e.target.value })}
                error_type={error_type}

                toggle_keyboard_open={()=> set_keyboard_open(!keyboard_open)}
            />

            {props.form_type === "signup" &&

                <Input
                
                    label={"REPEAT PASSWORD"}
                    type={"password"}
                    value={user_details.repeat_password}

                    onChange={(e) => set_user_details({ ...user_details, repeat_password: e.target.value })}
                    error_type={error_type}
                    
              
                    toggle_keyboard_open={()=> set_keyboard_open(!keyboard_open)}
                />}

            <Button text={props.form_type === "signup" ? "SIGN UP" : "LOG IN"} onClick={props.handle_submit.bind(this, user_details)} />

            <span className={classes.error_message}>{props.error_message}</span>

        </div>

    )

}

export default Form

