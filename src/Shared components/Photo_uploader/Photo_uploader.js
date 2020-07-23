import React, { useState } from "react"

//css
import classes from "./Photo_uploader.module.css"

//assets
import upload from "../../Assets/Icon/upload.svg"

//external
import spinner from "../../Assets/Spinners/Photo_spinner.svg"

//redux hooks
import { useDispatch, useSelector } from "react-redux"

//components
import Uploader from "./Components/Uploader/Uploader"
import UploadedImage from "./Components/Uploaded_image/Uploaded_image"

//functions
import upload_to_firebase from "./Functions/upload_to_firebase"

export const Photo_uploader = props => {

    //?selectors
    const user_id = useSelector(state => state.auth.user_id)
    const url = useSelector(state => state.profile_image.image_url)

    //- config
    const dispatch = useDispatch()

    //*states
    const [state, set_state] = useState({
        image: upload,
        successful_upload: false
    })

    return (

        <div test_handle={props.test_handle} className={classes.container}

            style={{
                // eslint-disable-next-line
                border: (state.successful_upload && "none") || props.no_style && "none",
                margin: props.no_style && "0",
                marginLeft:"0px",
                marginTop: "0px"
            }}

        >

            {state.successful_upload ? //If an image was uploaded successfully

                <UploadedImage state={state} on_change_photo={() => set_state({ ...state, successful_upload: false })} />

                ://Otherwise, if a photo has not been uploaded

                <Uploader image={state.image || spinner} handle_upload={(event) => upload_to_firebase(event, user_id, state, set_state, dispatch)} />

            }

        </div>

    )

}

export default Photo_uploader

