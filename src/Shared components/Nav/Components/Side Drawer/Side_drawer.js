import React, {useState} from 'react'

//css
import classes from "./Side_drawer.module.css"

//util
import colours from "../../../../util/colours"

//assets
import Logo from "../../../../Assets/Icon/logo.svg"

//components
import NavSquare from "./Components/Nav_square"

//external
import {Redirect} from "react-router-dom"

export const Side_drawer = props => {

    const [redirect, set_redirect] = useState(false)//state to hold the redirection (set by clicking a nav link)

    return (

        <div className={[classes.container, props.drawer_open && classes.container_open].join(" ")} style={{borderColor:colours.primary}}>

            <div className={classes.top_bar} style={{ color: colours.secondary }} onClick={()=> set_redirect("/landing")}>

                <img src={Logo} alt={"A Logo icon"} className={classes.logo} />
                <span className={classes.recall}>RECALL</span>

            </div>

            <div className={classes.square_container}>

                {
                    [["HOME", "dashboard"], ["ADD NEW", "add_new"], ["NOTES", "view_all"], ["SEARCH", "view_all"], ["FRIENDS", "friends"], ["ACCOUNT", "account"]]
                        .map(link =>

                            <NavSquare text={link[0]} icon={link[0]} key={link[0]} onClick={()=> set_redirect(link[1])} />

                        )
                }

            </div>

            <div className={classes.toggle_button_container}>

                <div className={classes.toggle_button} onClick={props.handle_toggle} style={{background:colours.primary}}>Menu</div>

            </div>

            {redirect && <Redirect to={redirect}/>}

        </div>

    )

}

export default Side_drawer
