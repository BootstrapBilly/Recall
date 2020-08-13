export const SET_CURRENTLY_BEING_DRAGGED = "SET_CURRENTLY_BEING_DRAGGED";
export const CLEAR_CURRENTLY_BEING_DRAGGED = "CLEAR_CURRENTLY_BEING_DRAGGED";

export const set_currently_being_dragged = (note, index) => {

    return async dispatch => {

        try {

            return dispatch({type:SET_CURRENTLY_BEING_DRAGGED, payload:{note:note, index:index}})

        }

        catch (error) {

            console.log(error)

        }

    }

}

export const clear_currently_being_dragged = () => {

    return async dispatch => {

        try {

            return dispatch({type:CLEAR_CURRENTLY_BEING_DRAGGED})

        }

        catch (error) {

            console.log(error)

        }

    }

}



