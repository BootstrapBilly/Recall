import { EXPAND_NOTE, COLLAPSE_NOTE } from "../Actions/1_handle_toggle_note_action"

const initialState = {//set the initial state

    expanded_notes: []

}

const handle_note_toggle = (state = initialState, action) => {

    switch (action.type) {

        case EXPAND_NOTE:

        console.log(action.payload)
            return { ...state, expanded_notes: [...state.expanded_notes, action.payload]}

        case COLLAPSE_NOTE:

            return { ...state, expanded_notes: [...state.expanded_notes.filter(note => note !== action.payload)]}

        default:

            return state;
    }

}

export default handle_note_toggle
