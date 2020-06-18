import React, { useState } from 'react'

//css
import classes from "./FacebookButton.module.css"

//external
import FacebookLogin from "react-facebook-login"

export const FacebookButton = () => {

    const [is_logged_in, set_is_logged_in] = useState(false)
    const [user_details, set_user_details] = useState({ name: "", email: "", picture: "" })

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
            fields="name,email,picture"
            onClick={() => handle_click()}
            callback={(data) => handle_response(data)}
            render={renderProps => (
                <button onClick={renderProps.onClick}>This is my custom FB button</button>
            )} />
    }


    return (

        <div className={classes.container}>

            {facebook_content}

        </div>

    )

}

export default FacebookButton