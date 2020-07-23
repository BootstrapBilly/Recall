import React from 'react'

import classes from './Change_photo.module.css'

//components
import PhotoUploader from "../../../../Shared components/Photo_uploader/Photo_uploader"

export const Change_photo = () => {

    return (

        <div className={classes.container}>

            <PhotoUploader/>

        </div>

    )

}

export default Change_photo