import React, { useState } from 'react'

import classes from './Authentication.module.css'

//components
import AuthForm from "./Components/Auth_form/Auth_form"
import Landing from "./Components/Landing/Landing"

//util


export const Authentication = () => {

    const [content, set_content] = useState("landing")

    return (

        <React.Fragment>

            <div className={classes.container}>

                <div className={[classes.landing_container, content === "landing" && classes.landing_in_view].join(" ")}>
                    <Landing handle_go_forward={() => set_content("form")} />
                </div>

                <div className={[classes.form_container, content === "form" && classes.form_in_view].join(" ")}>
                    <AuthForm handle_go_back={() => set_content("landing")} />
                </div>

            </div>

        </React.Fragment>

    )

}

export default Authentication