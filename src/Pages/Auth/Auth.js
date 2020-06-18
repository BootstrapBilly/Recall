import React, { useState } from 'react'

//css
import classes from "./Auth.module.css"

//components
import Button from "./Components/Button/Button"
import Form from "./Components/Form/Form"

//util
import colours from "../../util/colours"

export const Auth = () => {

    const [input_open, set_input_open] = useState(false)//state to determine whether or not the input is open

    const handle_open_input = type => {

        switch (type) {//switch the type (way the input was opened)

            case "alt_text"://if it was the login/signup text

                if (input_open) return set_input_open(false)//close the input
                else return set_input_open("login");//open the login input

            case "signup":

                return set_input_open("signup")//if it was by the signup button, open the signup input
        }
    }

    return (

        <React.Fragment>

            <div className={[classes.container, input_open && classes.container_input_open].join(" ")}>

                <div className={classes.background_image}></div>

                {/* Logo container*/}
                <div className={classes.logo_container}>

                    <img src={require("../../Assets/Icon/logo.svg")} alt="logo" className={classes.logo} />

                </div>

                {/* Button container */}
                <div className={[classes.button_container, input_open && classes.button_container_input_open].join(" ")}>

                    <Button text={"Connect with Facebook"} background_color="#1877f2" icon_name="facebook.svg" />
                    <Button text={"Sign up for an account"} background_color={colours.primary} icon_name="user.svg" onClick={() => handle_open_input("signup")} />

                </div>

                {/* Alt text, changes depending on what kind of input is open*/}
                <div className={classes.alt_text} onClick={() => handle_open_input("alt_text")}>

                    <span className={[classes.login, input_open === "login" && classes.login_input_open].join(" ")}>Already have an account ? Log in</span>
                    <span className={[classes.signup, input_open === "login" && classes.signup_input_open].join(" ")}>Need to create an account ? Sign up</span>

                </div>

            </div>

            {/* Input section, hidden to start, opened by triggering the handle_open_input function */}
            <div className={[classes.input_container, input_open && classes.input_container_open].join(" ")}>

                <Form type={input_open}/>

            </div>

        </React.Fragment>

    )

}

export default Auth
