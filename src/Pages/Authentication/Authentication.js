import React, { useState } from 'react'

import classes from './Authentication.module.css'

//components
import AuthForm from "./Components/Auth_form/Auth_form"
import Landing from "./Components/Landing/Landing"

//util


export const Authentication = () => {

    const [content, set_content] = useState("landing")

    return (

        <div className={classes.container}>

            {
                content === "landing" ?

                    <Landing handle_go_forward={()=> set_content("form")} />
                    
                    : content === "form" &&

                    <AuthForm  handle_go_back={()=> set_content("landing")}/>

            }

        </div>

    )

}

export default Authentication