import {UPLOAD_SUCCESS, UPLOAD_FAILURE, CLEAR_PHOTO} from "../Actions/4_photo_upload_handler_action"

const initialState = {//set the initial state
    last_uploaded_photo:null,
    error:null
}

const photo_upload = (state = initialState, action) => {

    switch (action.type) {

        case UPLOAD_SUCCESS:return {...state, last_uploaded_photo: action.payload}
        case UPLOAD_FAILURE:return {...state, error: action.payload}
        case CLEAR_PHOTO:{ 
            return {...state, last_uploaded_photo:null}
    }
        default:return state;
    }

}

export default photo_upload

