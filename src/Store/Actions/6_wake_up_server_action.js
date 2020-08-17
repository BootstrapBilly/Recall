export const MARK_SERVER_AWAKE = "MARK_SERVER_AWAKE";

export const mark_server_awake = () => {

    return async dispatch => {

        try {

            return dispatch({type:MARK_SERVER_AWAKE})

        }

        catch (error) {

            console.log(error)

        }

    }

}




