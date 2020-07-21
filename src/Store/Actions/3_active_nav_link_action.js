export const SET_ACTIVE_LINK = "SET_ACTIVE_LINK";

export const set_active_link = (link) => {

    return async dispatch => {

        try {

            return dispatch({type:SET_ACTIVE_LINK, payload:link})

        }

        catch (error) {

            console.log(error)

        }

    }

}



