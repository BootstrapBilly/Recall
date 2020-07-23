import send_request from "../../util/send_request"

export const UPLOAD_SUCCESS = "UPLOAD_SUCCESS";
export const UPLOAD_FAILURE = "UPLOAD_FAILURE";
export const CLEAR_PHOTO = "CLEAR_PHOTO"

export const reload_search_result_action = photo_url => {

    return async dispatch => {

        return dispatch({ type: UPLOAD_SUCCESS, payload: photo_url })

    }

}

export const set_url_in_database = form_values => {

    return async dispatch => {

            const response = await send_request("set_image_url", {form_values:form_values })   
            if (response.data.success) return dispatch({ type: UPLOAD_SUCCESS, payload: form_values.url})

    }

}

export const clear_uploaded_photo = () => {

    return async dispatch => {
        
        return dispatch({type: CLEAR_PHOTO})
    
    }
}

export const handle_upload_error_action = error => {

    return async dispatch => {

        return dispatch({ type: UPLOAD_FAILURE, payload: error })

    }

}

