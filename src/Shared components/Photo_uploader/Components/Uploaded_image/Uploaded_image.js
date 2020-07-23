import React from 'react'

import classes from "./Uploaded_image.module.css"

//assets
import spinner from "../../../../Assets/Spinners/Photo_spinner.svg"

//util
import colours from "../../../../util/colours"

export const Uploaded_image = props => {

    return (

        <div className={classes.successful_upload_container}>

            <img src={props.state.image || spinner} alt={"An icon"} className={classes.uploaded_image} />

            {/* option to upload the photo again*/}
            
            <span onClick={props.on_change_photo} 
            className={classes.button}>Change Again</span>

        </div>

    )

}

export default Uploaded_image
