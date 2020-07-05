export const EXPAND_NOTE = "EXPAND_NOTE";
export const COLLAPSE_NOTE = "COLLAPSE_NOTE";
export const ENABLE_EDIT_MODE = "ENABLE_EDIT_MODE";
export const DISABLE_EDIT_MODE = "DISABLE_EDIT_MODE";

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

export const enable_edit_mode = (note_id) => {

    return async dispatch => {

        try {

            return dispatch({ type: ENABLE_EDIT_MODE, payload: note_id })

        }

        catch (error) {

            return console.log(error)

        }

    }

}

export const disable_edit_mode = (note_id) => {

    return async dispatch => {

        try {

            return dispatch({ type: DISABLE_EDIT_MODE, payload: note_id })

        }

        catch (error) {

            return console.log(error)

        }

    }

}


