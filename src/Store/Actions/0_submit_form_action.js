import send_request from "../../util/send_request"

export const API_RESPONSE = "API_RESPONSE";

export const submit_form = (data, url, type) => {

    let request = send_request(url, data) 

    if(type) {request = send_request(url, data, type)}

    return async dispatch => {

        try {

            const response = await request      
            console.log(response)
            if (response.data) return dispatch({ type: API_RESPONSE, payload: response })

        }

        catch (error) {

            return dispatch({ type: API_RESPONSE, payload: error.response})

        }

    }

}
