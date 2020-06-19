import React, { useState } from 'react'

//css
import classes from "./FacebookButton.module.css"

//external
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

//components
import Button from "../Button/Button"

export const FacebookButton = () => {

    const [is_logged_in, set_is_logged_in] = useState(false)

    let facebook_content;

    const handle_click = () => {

        console.log("clicked")

    }

    const handle_response = response => {

        console.log(response)

    }

    if (is_logged_in) {

        facebook_content = null
        console.log("logged in")
    }

    else {
        facebook_content = <FacebookLogin
            appId="703706777115834"
            autoLoad={true}
            fields="email"
            onClick={() => handle_click()}
            callback={(data) => handle_response(data)}
            render={renderProps => (
                <Button text={"Connect with Facebook"} background_color="#1877f2" icon_name="facebook.svg" onClick={renderProps.onClick} />
            )} />
    }


    return (

            <div className={classes.container}>{facebook_content}</div>
    
    )

}

export default FacebookButton