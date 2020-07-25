import React from 'react'

//ccss
import classes from './User.module.css'

//components
import ProfilePic from "../../../../../Shared components/Profile_image/Profile_image"

//util
import capitalizeFirstChar from '../../../../../util/capitalize_first'

//assets
import Arrow from "../../../../../Assets/Icon/left-arrow.svg"

export const User = props => {

    return (

        <div className={classes.container} onClick={props.onClick.bind(this, props.details)}>
            
            <ProfilePic scale={0.5} marginLeft={"-10px"} source={props.details.image_url} user />

            <div className={classes.name}>{capitalizeFirstChar(props.details.username)}</div>

            <div className={classes.icon_container}>

                <img src={Arrow} alt="Add friend icon" className={classes.add_icon}/>

            </div>

        </div>
    )

}

export default User