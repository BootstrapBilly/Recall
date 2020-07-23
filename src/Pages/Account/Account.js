import React, { useState } from 'react'

//css
import classes from "./Account.module.css"

//components
import Nav from "../../Shared components/Nav/Nav"
import Setting from "./components/Setting/Setting"
import ChangePhoto from "./components/Change_photo/Change_photo"
import ChangeUsername from "./components/Change_username/Change_username"
import ChangePassword from "./components/Change_password/Change_password"
import DeleteAccount from "./components/Delete_account/Delete_account"

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

                <Setting text={"Update profile photo"} icon={"photo"} handle_toggle={() => set_open_settings({ ...open_settings, photo: !open_settings.photo })} open={open_settings.photo} />

                {open_settings.photo && <ChangePhoto />}

                <Setting text={"Change username"} icon={"username"} handle_toggle={() => set_open_settings({ ...open_settings, username: !open_settings.username })} open={open_settings.username} />

                {open_settings.username && <ChangeUsername handle_success={()=> set_open_settings({...open_settings, username:false })} />}

                <Setting text={"Change password"} icon={"lock"} handle_toggle={() => set_open_settings({ ...open_settings, password: !open_settings.password })} open={open_settings.password}/>

                {open_settings.password && <ChangePassword />}

                <Setting text={"Delete account"} icon={"delete"} handle_toggle={() => set_open_settings({ ...open_settings, delete: !open_settings.delete })} open={open_settings.delete} />

                {open_settings.delete && <DeleteAccount />}

            </div>

            <Nav />

        </div>

    )

}

export default Account