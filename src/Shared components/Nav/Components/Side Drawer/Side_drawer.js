import React, { useState } from 'react'

//css
import classes from "./Side_drawer.module.css"

//util
import colours from "../../../../util/colours"

//assets
import Logo from "../../../../Assets/Icon/logo.svg"

//components
import NavSquare from "./Components/Nav_square"

//external
import { Redirect } from "react-router-dom"

//redux hooks
import { useDispatch } from "react-redux"

//redux action creators
import { clear_response } from "../../../../Store/Actions/0_submit_form_action"
import { collapse_all } from "../../../../Store/Actions/1_note_action"
import { handle_logout } from "../../../../Store/Actions/2_authentication_action"

export const Side_drawer = props => {

    //-config
    const dispatch = useDispatch()

    const [redirect, set_redirect] = useState(false)//state to hold the redirection (set by clicking a nav link)

    const handle_navigation = (link) => {

        dispatch(clear_response())
        dispatch(collapse_all())
        set_redirect(link)
        props.handle_toggle()

    }

    const handle_logout_click = () => {

        dispatch(handle_logout())
        set_redirect("/")

    }

    return (

        <div test_handle="nav_menu_container" className={[classes.container, props.drawer_open && classes.container_open].join(" ")}>

            <div className={classes.top_bar} style={{ color: colours.primary }} onClick={() => set_redirect("/landing")}>

                <img src={Logo} alt={"A Logo icon"} className={classes.logo} />
                <span className={classes.recall}>RECALL</span>

            </div>

            <div className={classes.square_container}>

                {
                    [["HOME", "dashboard", "dashboard_nav_square"], ["ADD NOTE", "add_new", "add_new_nav_square"], ["VIEW NOTES", "view_all", "view_all_nav_square"], ["COMBINE NOTES", "combine_notes", "combine_notes_nav_square"], ["FRIENDS", "friends", "friends_nav_square"], ["ACCOUNT", "account", "account_nav_square"]]
                        .map(link =>

                            <NavSquare test_handle={link[2]} text={link[0]} icon={link[0]} key={link[0]} onClick={() => handle_navigation(link[1])} />

                        )
                }

            </div>

            <div className={classes.logout_button_container}>

                <div className={classes.logout_button} style={{ background: colours.primary }} onClick={() => handle_logout_click()}>LOG OUT</div>

            </div>

            <div className={classes.toggle_button_container}>

                <div test_handle="menu_toggle" className={classes.toggle_button} onClick={props.handle_toggle} style={{ background: colours.primary }}>Menu</div>

            </div>

            {redirect && <Redirect to={redirect} />}

        </div>

    )

}

export default Side_drawer
