export const EXPAND_NOTE = "EXPAND_NOTE";
export const COLLAPSE_NOTE = "COLLAPSE_NOTE";

export const expand_note = (note_id) => {

    return async dispatch => {

        try {

            return dispatch({ type: EXPAND_NOTE, payload: note_id })

        }

        catch (error) {

            return console.log(error)

        }

    }

}

export const collapse_note = (note_id) => {

    return async dispatch => {

        try {

            return dispatch({ type: COLLAPSE_NOTE, payload: note_id })

        }

        catch (error) {

            return console.log(error)

        }

    }

}



