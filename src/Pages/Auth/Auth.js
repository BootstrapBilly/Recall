import React from 'react'

//css
import classes from "./Auth.module.css"

//components
import Button from "./Components/Button/Button"

//util
import colours from "../../util/colours"

export const Auth = () => {

    return (

        <div className={classes.container}>

            <div className={classes.background_image}></div>

            <div className={classes.logo_container}>

                <img src={require("../../Assets/Icon/logo.svg")} alt="logo" className={classes.logo} />
                
            </div>

            <div className={classes.button_container}>

                <Button text={"Connect with Facebook"} background_color="#1877f2" icon_name="facebook.svg" />
                <Button text={"Sign up for an account"} background_color={colours.primary} icon_name="user.svg" />
                <span className={classes.alt_text}>Already have an account ? Log in</span>

            </div>

        </div>

    )

}

export default Auth
