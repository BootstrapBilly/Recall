import {UPLOAD_SUCCESS, UPLOAD_FAILURE, CLEAR_PHOTO, SET_IMAGE_URL} from "../Actions/4_profile_image_handler"

const initialState = {//set the initial state
    last_uploaded_photo:null,
    error:null,
    image_url:null
}

const photo_upload = (state = initialState, action) => {

    switch (action.type) {

        case UPLOAD_SUCCESS:return {...state, last_uploaded_photo: action.payload, image_url:action.payload}
        case UPLOAD_FAILURE:return {...state, error: action.payload}
        case CLEAR_PHOTO:return {...state, last_uploaded_photo:null}
        case SET_IMAGE_URL:return {...state, image_url:action.payload}

        default:return state;
    }

}

export default photo_upload

