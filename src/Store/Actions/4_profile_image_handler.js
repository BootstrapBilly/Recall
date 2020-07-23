import send_request from "../../util/send_request"

export const UPLOAD_SUCCESS = "UPLOAD_SUCCESS";
export const UPLOAD_FAILURE = "UPLOAD_FAILURE";
export const CLEAR_PHOTO = "CLEAR_PHOTO"
export const SET_IMAGE_URL = "SET_IMAGE_URL"

export const reload_search_result_action = photo_url => {

    return async dispatch => {

        return dispatch({ type: UPLOAD_SUCCESS, payload: photo_url })

    }

}

export const set_url_in_database = (url, user_id) => {

    return async dispatch => {

        const response = await send_request("set_image_url", { url: url, user_id:user_id })
        if (response.data.success) return dispatch({ type: UPLOAD_SUCCESS, payload: url })

    }

}

export const clear_uploaded_photo = () => {

    return async dispatch => {

        return dispatch({ type: CLEAR_PHOTO })

    }
}

export const handle_upload_error_action = error => {

    return async dispatch => {

        return dispatch({ type: UPLOAD_FAILURE, payload: error })

    }

}

export const fetch_image_url = user_id => {

    return async dispatch => {

        try {

            const response = await send_request("fetch_image_url", { user_id:user_id })
            if (response.data.success) return dispatch({ type: SET_IMAGE_URL, payload: response.data.url })

        }

        catch (error) {

            console.log(error)

        }

    }

}

