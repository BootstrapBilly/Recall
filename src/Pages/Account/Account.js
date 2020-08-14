import React, { useState } from 'react'

//css
import classes from "./Account.module.css"

//components
import Nav from "../../Shared components/Nav/Nav"
import Setting from "./components/Setting/Setting"
import ChangePhoto from "./components/Change_photo/Change_photo"
import ChangeUsername from "./components/Change_username/Change_username"
import ChangePassword from "./components/Change_password_account/Change_password_account"
import DeleteAccount from "./components/Delete_account/Delete_account"
import TopBar from "../../Shared components/Top_bar/Top_bar"

export const Account = () => {

    const [open_settings, set_open_settings] = useState({//determine which options are currently expanded

        photo: false,
        username: false,
        password: false,
        delete: false

    })

    return (

        <div className={classes.container}>

            <TopBar title={"Account management"} no_search />

            <div className={classes.options_container}>

                <Setting

                    text={"Update profile photo"}
                    icon={"photo"}
                    handle_toggle={() => set_open_settings({ ...open_settings, photo: !open_settings.photo })} open={open_settings.photo} test_handle="photo_option"

                />

                {open_settings.photo && <ChangePhoto />}

                <Setting

                    text={"Change username"}
                    icon={"username"}
                    handle_toggle={() => set_open_settings({ ...open_settings, username: !open_settings.username })}
                    open={open_settings.username}
                    test_handle="username_option"

                />

                {open_settings.username && <ChangeUsername handle_success={() => set_open_settings({ ...open_settings, username: false })} />}

                <Setting

                    text={"Change password"}
                    icon={"lock"}
                    handle_toggle={() => set_open_settings({ ...open_settings, password: !open_settings.password })}
                    open={open_settings.password}
                    test_handle="password_option"

                />

                {open_settings.password && <ChangePassword handle_success={() => set_open_settings({ ...open_settings, password: false })} />}

                <Setting

                    text={"Delete account"}
                    icon={"delete"}
                    handle_toggle={() => set_open_settings({ ...open_settings, delete: !open_settings.delete })}
                    open={open_settings.delete}
                    test_handle="delete_account_option"

                />

                {open_settings.delete && <DeleteAccount />}

            </div>

            <Nav />

        </div>

    )

}

export default Account