import React, {useState} from 'react'

//css
import classes from './Form.module.css'

//components
import Input from "./Components/Input/Input"
import Button from "./Components/Button/Button"

export const Form = props => {

    const [input_focus, set_input_focus] = useState(false)

    const handle_input_focus = type => {

        set_input_focus(type)

    } 

    const handle_input_blur = () => {

        set_input_focus(false)

    }
    return (

        <div className={[classes.container, !props.type && classes.container_hidden, input_focus && classes.container_focused].join(" ")}>

            <Input label={props.type === "login" ? "EMAIL OR USERNAME" : "EMAIL"} type={"text"} onFocus={()=> handle_input_focus("EMAIL OR USERNAME")} onBlur={()=> handle_input_blur()} focus={input_focus}/>

            {props.type === "signup" && <Input label={"USERNAME"} type={"text"} onFocus={()=> handle_input_focus("USERNAME")} onBlur={()=> handle_input_blur()} focus={input_focus}/>}

            <Input label={"PASSWORD"} type={"password"} onFocus={()=> handle_input_focus("PASSWORD")} onBlur={()=> handle_input_blur()} focus={input_focus}/>

            {props.type === "signup" && <Input label={"REPEAT PASSWORD"} type={"password"} onFocus={()=> handle_input_focus("REPEAT PASSWORD")} onBlur={()=> handle_input_blur()} focus={input_focus}/>}

            <Button text={props.type === "signup" ? "SIGN UP" : "LOG IN"}/>
            
        </div>

    )

}

export default Form

