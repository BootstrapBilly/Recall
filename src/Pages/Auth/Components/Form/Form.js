import React from 'react'

//css
import classes from './Form.module.css'

//components
import Input from "./Components/Input/Input"
import Button from "./Components/Button/Button"

export const Form = props => {

    return (

        <div className={[classes.container, !props.type && classes.container_hidden].join(" ")}>

            <Input label={props.type === "login" ? "EMAIL OR USERNAME" : "EMAIL"} type={"text"}/>

            {props.type === "signup" && <Input label={"USERNAME"} type={"text"}/>}

            <Input label={"PASSWORD"} type={"password"}/>

            {props.type === "signup" && <Input label={"REPEAT PASSWORD"} type={"password"}/>}

            <Button text={props.type === "signup" ? "SIGN UP" : "LOG IN"}/>
            
        </div>

    )

}

export default Form

