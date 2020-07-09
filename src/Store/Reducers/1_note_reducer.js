import { EXPAND_NOTE, EXPAND_SELECTED_NOTE, COLLAPSE_NOTE, COLLAPSE_SELECTED_NOTE, COLLAPSE_ALL, ENABLE_EDIT_MODE, DISABLE_EDIT_MODE, SET_DUPLICATE_TITLE, CLEAR_DUPLICATE_TITLE } from "../Actions/1_note_action"

const initialState = {//set the initial state

    expanded_notes: [],
    expanded_selected_notes:[],

    edit_mode_notes: [],

    duplicate_titles: []

}

const handle_note_toggle = (state = initialState, action) => {

    switch (action.type) {

        case EXPAND_NOTE:

            return { ...state, expanded_notes: [...state.expanded_notes, action.payload]}

        case EXPAND_SELECTED_NOTE:

            return { ...state, expanded_selected_notes: [...state.expanded_selected_notes, {id:action.payload.id, index:action.payload.index}]}

        case COLLAPSE_NOTE:

            return { ...state, expanded_notes: [...state.expanded_notes.filter(note => note !== action.payload)]}

        case COLLAPSE_SELECTED_NOTE:

            return { ...state, expanded_selected_notes: [...state.expanded_selected_notes.filter(note => note.id !== action.payload.id && note.index === action.payload.index)]}

        case COLLAPSE_ALL:

            return { ...state, expanded_notes: []}

        case ENABLE_EDIT_MODE:

            return { ...state, edit_mode_notes: [...state.edit_mode_notes, action.payload]}

        case DISABLE_EDIT_MODE:

            return { ...state, edit_mode_notes: [...state.edit_mode_notes.filter(note => note !== action.payload)]}

        case SET_DUPLICATE_TITLE:

            return { ...state, duplicate_titles: [...state.duplicate_titles, action.payload]}

        case CLEAR_DUPLICATE_TITLE:
            
            return { ...state, duplicate_titles: [...state.duplicate_titles.filter(title => title !== action.payload)]}

        default:

            return state;
    }

}

export default handle_note_toggle
