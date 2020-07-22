import React, { useState } from 'react'

//css
import classes from "./Account.module.css"

//components
import Nav from "../../Shared components/Nav/Nav"
import Setting from "./components/Setting/Setting"

export const Account = () => {

    const [open_settings, set_open_settings] = useState({

        photo: false,
        username: false,
        password: false,
        delete: false

    })

    return (

        <div className={classes.container}>

            <div className={classes.title}>Account settings</div>

            <div className={classes.options_container}>

                <Setting text={"Change photo"} icon={"photo"} handle_toggle={() => set_open_settings({ ...open_settings, photo: !open_settings.photo })} open={open_settings.photo} />

                {open_settings.photo && "photo"}

                <Setting text={"Change username"} icon={"username"} handle_toggle={() => set_open_settings({ ...open_settings, username: !open_settings.username })} open={open_settings.username} />

                {open_settings.username && "username"}

                <Setting text={"Change password"} icon={"lock"} handle_toggle={() => set_open_settings({ ...open_settings, password: !open_settings.password })} open={open_settings.password}/>

                {open_settings.password && "password"}

                <Setting text={"Delete account"} icon={"delete"} handle_toggle={() => set_open_settings({ ...open_settings, delete: !open_settings.delete })} open={open_settings.delete} />

                {open_settings.delete && "deleto"}

            </div>

            <Nav />

        </div>

    )

}

export default Account