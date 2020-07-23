import React from 'react'

import classes from "./Uploader.module.css"

//assets
import upload from "../../../../Assets/Icon/upload.svg"

export const Uploader = props => {

    return (

        <React.Fragment>

            <img src={upload} alt={"An icon"} className={classes.icon} style={{ display: props.image === upload ? "block" : "none" }} />

            <img src={props.image} alt={"An icon"} className={classes.preview_img} style={{ display: props.image === upload ? "none" : "block" }} />

            <input type="file" name="img" id="img" className={classes.input} style={{ display: "none" }} onChange={props.handle_upload} />

            <label test_handle="image_upload_clickable_area" htmlFor="img" className={classes.clickable_area}><span className={classes.choose_photo}>Click here to choose a new photo</span></label>

        </React.Fragment>

    )

}

export default Uploader
