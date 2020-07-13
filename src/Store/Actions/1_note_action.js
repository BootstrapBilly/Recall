export const EXPAND_NOTE = "EXPAND_NOTE";
export const EXPAND_SELECTED_NOTE = "EXPAND_SELECTED_NOTE";
export const EXPAND_NESTED_NOTE = "EXPAND_NESTED_NOTE";
export const COLLAPSE_NOTE = "COLLAPSE_NOTE";
export const COLLAPSE_SELECTED_NOTE = "COLLAPSE_SELECTED_NOTE";
export const COLLAPSE_NESTED_NOTE = "COLLAPSE_NESTED_NOTE";
export const COLLAPSE_ALL = "COLLAPSE_ALL";
export const ENABLE_EDIT_MODE = "ENABLE_EDIT_MODE";
export const DISABLE_EDIT_MODE = "DISABLE_EDIT_MODE";
export const SET_DUPLICATE_TITLE = "SET_DUPLICATE_TITLE";
export const CLEAR_DUPLICATE_TITLE = "CLEAR_DUPLICATE_TITLE";


export const expand_note = (note_id) => {

    return async dispatch => {

        try {

            return dispatch({ type: EXPAND_NOTE, payload: note_id})

        }

        catch (error) {

            return console.log(error)

        }

    }

}

export const expand_selected_note = (note_id, index) => {

    return async dispatch => {

        try {

            return dispatch({ type: EXPAND_SELECTED_NOTE, payload: {id:note_id, index:index}})

        }

        catch (error) {

            return console.log(error)

        }

    }

}

export const expand_nested_note = (note_id, index) => {

    return async dispatch => {

        try {

            return dispatch({ type: EXPAND_NESTED_NOTE, payload: {id:note_id, index:index}})

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

export const collapse_selected_note = (note_id, index) => {

    return async dispatch => {

        try {

            return dispatch({ type: COLLAPSE_SELECTED_NOTE, payload: {id:note_id, index:index }})

        }

        catch (error) {

            return console.log(error)

        }

    }

}

export const collapse_nested_note = (note_id, index) => {

    return async dispatch => {

        try {

            return dispatch({ type: COLLAPSE_NESTED_NOTE, payload: {id:note_id, index:index }})

        }

        catch (error) {

            return console.log(error)

        }

    }

}

export const collapse_all = () => {

    return async dispatch => {

        try {

            return dispatch({ type: COLLAPSE_ALL})

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

export const set_duplicate_title = (note_id) => {

    return async dispatch => {

        try {

            return dispatch({ type: SET_DUPLICATE_TITLE, payload: note_id })

        }

        catch (error) {

            return console.log(error)

        }

    }

}

export const clear_duplicate_title = (note_id) => {

    return async dispatch => {

        try {

            return dispatch({ type: CLEAR_DUPLICATE_TITLE, payload: note_id })

        }

        catch (error) {

            return console.log(error)

        }

    }

}




