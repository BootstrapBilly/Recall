import React, { useState } from 'react'

//css
import classes from './Change_password.module.css'

//components
import Input from "../../Shared components/Input/Input"
import Logo from "../../Shared components/Logo/Logo"
import colours from '../../util/colours'

export const Change_password = () => {

    const [form_data, set_form_data] = useState({

        password: null,
        repeat_password: null

    })

    return (

        <div className={classes.container}>

            <Logo />

            <span className={classes.title}>Reset Password</span>

            <div className={classes.form_wrapper}>

                <Input

                    test_handle="change_password_input"
                    authentication
                    label={"New password"}
                    placeholder={"Enter your password"}
                    value={form_data.password}
                    onChange={(e) => set_form_data({ ...form_data, password: e.target.value })}

                />

                <Input

                    test_handle="change_repeat_password_input"
                    authentication
                    label={"Repeat password"}
                    placeholder={"Enter your password"}
                    value={form_data.repeat_password}
                    onChange={(e) => set_form_data({ ...form_data, repeat_password: e.target.value })}

                />

            </div>

            <div className={classes.reset_button} style={{background:colours.primary}}>Update password</div>

        </div>

    )

}

export default Change_password
