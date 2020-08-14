import React, { useState } from 'react'

//css
import classes from "./Side_drawer.module.css"

//util
import colours from "../../../../util/colours"
import capitalizeFirstChar from '../../../../util/capitalize_first'

//assets
import Logo from "../../../../Assets/Icon/logo.svg"

//components
import NavSquare from "./Components/Nav_square"
import ProfileImage from "../../../../Shared components/Profile_image/Profile_image"

//external
import { Redirect } from "react-router-dom"

//redux hooks
import { useDispatch } from "react-redux"

//redux action creators
import { clear_response } from "../../../../Store/Actions/0_submit_form_action"
import { collapse_all } from "../../../../Store/Actions/1_note_action"
import { handle_logout } from "../../../../Store/Actions/2_authentication_action"
import { clear_uploaded_photo } from '../../../../Store/Actions/4_profile_image_handler'



export const Side_drawer = props => {

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook

    const [redirect, set_redirect] = useState(false)//state to hold the redirection (set by clicking a nav link)

    const handle_navigation = (link) => {//this function is called whenever a nav square inside the menu is clicked

        dispatch(clear_response())//clear the response
        dispatch(collapse_all())//collapse all open notes
        set_redirect(link)//redirect the user to their desired page
        props.handle_toggle()//collapse the side drawer

    }

    const handle_logout_click = () => {//this is called when the user clicks the logout button

        dispatch(handle_logout())//remove their local storage data
        dispatch(clear_uploaded_photo())//clear their profile picture
        set_redirect("/")//redirect them to the landing page
        dispatch(clear_response())//clear the response

    }

    return (

        <div test_handle="nav_menu_container" className={[classes.container, props.drawer_open && classes.container_open].join(" ")}>

            <div className={classes.top_bar} style={{ color: colours.primary }}>

                <img src={Logo} alt={"A Logo icon"} className={classes.logo} />
                <span className={classes.recall}>RECALL</span>

            </div>

            <div className={classes.square_container}>

                {

                    [

                        ["Home", "dashboard", "dashboard_nav_square"],
                        ["Add a note", "add_new", "add_new_nav_square"],
                        ["View notes", "view_all", "view_all_nav_square"],
                        ["Combine notes", "combine_notes", "combine_notes_nav_square"],
                        ["Friends", "friends", "friends_nav_square"],
                        ["Account", "account", "account_nav_square"]

                    ]
                        .map(link =>

                            <NavSquare test_handle={link[2]} text={link[0]} icon={link[0]} key={link[0]} onClick={() => handle_navigation(link[1])} />

                        )

                }

            </div>

            <div className={classes.name} test_handle={"side-drawer-username"}>{window.localStorage.getItem("username") && capitalizeFirstChar(window.localStorage.getItem("username"))}</div>

            <div className={classes.photo_container}><ProfileImage /></div>

            <div className={classes.logout_button_container}>

                <div test_handle="logout_button" className={classes.logout_button} style={{ background: colours.primary }} onClick={() => handle_logout_click()}>LOG OUT</div>

            </div>

            <div className={classes.toggle_button_container}>

                <div test_handle="menu_toggle" className={classes.toggle_button} onClick={props.handle_toggle} style={{ background: colours.primary }}>Menu</div>

            </div>

            {redirect && <Redirect to={redirect} />}

        </div>

    )

}

export default Side_drawer
