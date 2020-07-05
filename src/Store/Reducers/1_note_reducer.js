import { EXPAND_NOTE, COLLAPSE_NOTE, ENABLE_EDIT_MODE, DISABLE_EDIT_MODE } from "../Actions/1_note_action"

const initialState = {//set the initial state

    expanded_notes: [],
    edit_mode_notes: []

}

const handle_note_toggle = (state = initialState, action) => {

    switch (action.type) {

        case EXPAND_NOTE:

            return { ...state, expanded_notes: [...state.expanded_notes, action.payload]}

        case COLLAPSE_NOTE:

            return { ...state, expanded_notes: [...state.expanded_notes.filter(note => note !== action.payload)]}

        case ENABLE_EDIT_MODE:

            return { ...state, edit_mode_notes: [...state.edit_mode_notes, action.payload]}

        case DISABLE_EDIT_MODE:

            return { ...state, edit_mode_notes: [...state.edit_mode_notes.filter(note => note !== action.payload)]}

        default:

            return state;
    }

}

export default handle_note_toggle
