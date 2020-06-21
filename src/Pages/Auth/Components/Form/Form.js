import React, { useState, useEffect } from 'react'

//css
import classes from './Form.module.css'

//components
import Input from "./Components/Input/Input"
import Button from "./Components/Button/Button"
import NavigationButtons from "./Components/Navigation_buttons/Navigation_buttons"

//redux hooks
import { useSelector } from "react-redux"

export const Form = props => {

    //?Selectors
    const response = useSelector(state => state.form.response)

    //*states
    const [keyboard_open, set_keyboard_open] = useState(false)//detect whether the keyboard is open, and move the form down (for mobile)
    const [show_submit_button, set_show_submit_button] = useState(false)//decide whether to show the submit button (changed by)

    //only used for manual signup
    const [manual_signup_step, set_manual_signup_step] = useState("email")//store the current stage of the signup form
    const [show_form_navigation_buttons, set_show_form_navigation_buttons] = useState(false)//show the next form navigation buttons after filling in username and password

    const [user_details, set_user_details] = useState({//stores the user details and controls each input in the form
        email: "",
        username: "",
        password: "",
        repeat_password: ""
    })

    const scan_inputs = () => {

        switch (props.form_type) {

            case "login":

                if (!user_details.email || !user_details.password) return set_show_submit_button(false)
                else return set_show_submit_button(true)

            case "signup":

                switch (manual_signup_step) {

                    case "email":
                        if (user_details.email) return set_show_form_navigation_buttons("next");
                        break;

                    case "username":
console.log(1)
                        if(!user_details.username) {
                            console.log(2)
                            return set_show_form_navigation_buttons("back");}
                        else return set_show_form_navigation_buttons("both");
                        break;

                    case "password":
                        if (user_details.password && user_details.repeat_password) return set_show_form_navigation_buttons("submit")
                        break;
                }

                if (!user_details.email || !user_details.username || !user_details.password || !user_details.repeat_password) return set_show_submit_button(false)
                else return set_show_submit_button(true)

            case "facebook":

                if (!user_details.username) return set_show_submit_button(false)
                else return set_show_submit_button(true)
        }

    }

    console.log(manual_signup_step)

    const handle_form_navigation = direction => {

        switch (manual_signup_step) {

            case "email":
         
                return set_manual_signup_step("username")

            case "username":

                if(direction === "back"){
                    console.log("triggered")
                    return set_manual_signup_step("email") 
                }
                    else if(direction === "next"){
                        set_manual_signup_step("password")
                    }
            case "password":
                direction === "back" ? set_manual_signup_step("username") : direction === "next" && props.handle_submit.bind(this, user_details)
        }
    }

    //when the input changes, scan them and see whether or not to show the button
    useEffect(() => { scan_inputs() }, [user_details, manual_signup_step])

    return (

        <div className={[classes.container, !props.form_type && classes.container_hidden, keyboard_open && classes.container_focused].join(" ")}>

            {props.form_type === "login" || (props.form_type === "signup" && manual_signup_step === "email") ?
                <Input

                    label={props.form_type === "login" ? "EMAIL OR USERNAME" : "EMAIL"}
                    type={"text"}
                    onChange={(e) => set_user_details({ ...user_details, email: e.target.value })}
                    toggle_keyboard_open={() => set_keyboard_open(!keyboard_open)}
                    value={user_details.email}
                />
                : null}

            {((props.form_type === "signup" && manual_signup_step === "username") || props.form_type === "facebook") &&

                <Input

                    label={"USERNAME"}
                    type={"text"}
                    onChange={(e) => set_user_details({ ...user_details, username: e.target.value })}
                    toggle_keyboard_open={(status) => set_keyboard_open(status)}
                    value={user_details.username}
                />
            }

            {props.form_type === "login" || (props.form_type === "signup" && manual_signup_step === "password") ?
                <Input

                    label={"PASSWORD"}
                    type={"password"}
                    onChange={(e) => set_user_details({ ...user_details, password: e.target.value })}
                    toggle_keyboard_open={() => set_keyboard_open(!keyboard_open)}
                    value={user_details.password}
                />
                : null}

            {props.form_type === "signup" && manual_signup_step === "password" &&

                <Input

                    label={"REPEAT PASSWORD"}
                    type={"password"}
                    onChange={(e) => set_user_details({ ...user_details, repeat_password: e.target.value })}
                    toggle_keyboard_open={() => set_keyboard_open(!keyboard_open)}
                    value={user_details.repeat_password}
                />
            }


            {show_form_navigation_buttons === "next" ? <NavigationButtons type="next" on_click={(direction) => handle_form_navigation(direction)} />
                : show_form_navigation_buttons === "back" ? <NavigationButtons type="back" on_click={(direction) => handle_form_navigation(direction)} />
                : show_form_navigation_buttons === "both" ? <NavigationButtons type="both" on_click={(direction) => handle_form_navigation(direction)} />
                    : show_form_navigation_buttons === "submit" && <NavigationButtons type="submit" on_click={(direction) => handle_form_navigation(direction)} />
            }

            {show_submit_button && <Button text={(props.form_type === "signup" || props.form_type === "facebook") ? "SIGN UP" : "LOG IN"} onClick={props.form_type === "facebook" ? props.handle_facebook_signup.bind(this, user_details.username) : props.handle_submit.bind(this, user_details)} />}

            <span className={classes.error_message}>{response && response.data.message}</span>

        </div>

    )

}

export default Form

