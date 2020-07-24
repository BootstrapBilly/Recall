import React, { useEffect, useState } from 'react'

//css
import classes from './Profile_image.module.css'

//redux hooks
import { useSelector, useDispatch } from "react-redux"

//redux action creators
import { fetch_image_url } from "../../Store/Actions/4_profile_image_handler"

//assets
import placeholder from "../../Assets/Icon/profile-placeholder.svg"

export const Profile_image = () => {

    //?selectors
    const user_id = useSelector(state => state.auth.user_id)//grab the user id from the reducer
    const url = useSelector(state => state.profile_image.image_url)

    //-config
    const dispatch = useDispatch()

    //*states
    const [image_url, set_image_url] = useState(placeholder)

    //!effects
    useEffect(() => {

        if (user_id) { dispatch(fetch_image_url(user_id)) }

        // eslint-disable-next-line
    }, [user_id, url])

    useEffect(() => { if (url) set_image_url(url) }, [url])

    return (

        <div className={classes.container}>

            <img src={image_url} alt="Your profile pic" className={classes.image} />

        </div>

    )

}

export default Profile_image