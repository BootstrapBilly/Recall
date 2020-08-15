import React, { useState } from 'react'

//ccss
import classes from './User.module.css'

//components
import ProfilePic from "../../../../Shared components/Profile_image/Profile_image"
import UserOptions from "./Components/User_options"

//util
import capitalizeFirstChar from '../../../../util/capitalize_first'
import colours from '../../../../util/colours'

//assets
import Arrow from "../../../../Assets/Icon/left-arrow.svg"

export const User = props => {

    //*states
    const [options_open, set_options_open] = useState(false)

    const handle_show_options = () => {

        if(options_open) return set_options_open(false)
        if(props.request_pending) return set_options_open(props.request_pending)
        else set_options_open(true)

    }

    return (

        <React.Fragment>

            <div className={classes.container} onClick={() => props.example ? undefined : props.add_friend || props.remove_access ? props.onClick(props.details) : handle_show_options()} style={{ marginTop: props.marginTop }} test_handle={props.details.username || props.details.user_details.username}>

                <ProfilePic scale={0.5} marginLeft={"-10px"} source={props.populated ? props.details.user_details.image_url : props.details.image_url} user />

                <div className={classes.name}>{capitalizeFirstChar(props.populated ? props.details.user_details.username : props.details.username)}</div>

                <div className={classes.icon_container}>

                    <img src={Arrow} alt="Add friend icon" className={[classes.add_icon, options_open && classes.icon_open].join(" ")} />

                </div>

                {props.request_pending && <span className={classes.pending_tag} style={{ backgroundColor: props.request_pending === "Pending" ? colours.primary : colours.green }}>{props.request_pending}</span>}

            </div>

            {options_open && <UserOptions type={options_open} details={props.details.user_details} />}

        </React.Fragment>
    )

}

export default User