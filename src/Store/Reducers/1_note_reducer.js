import { EXPAND_NOTE, EXPAND_SELECTED_NOTE, EXPAND_NESTED_NOTE, COLLAPSE_NOTE, COLLAPSE_SELECTED_NOTE, COLLAPSE_NESTED_NOTE, COLLAPSE_ALL, ENABLE_EDIT_MODE, ENABLE_EDIT_MODE_NESTED, DISABLE_EDIT_MODE, DISABLE_EDIT_MODE_NESTED, SET_DUPLICATE_TITLE, CLEAR_DUPLICATE_TITLE } from "../Actions/1_note_action"

const initialState = {//set the initial state

    expanded_notes: [],
    expanded_selected_notes: [],
    expanded_nested_notes: [],

    edit_mode_notes: [],
    edit_mode_nested_notes: [],

    duplicate_titles: [],

    current_filter: "All"

}

const handle_note_toggle = (state = initialState, action) => {

    switch (action.type) {

        case EXPAND_NOTE:

            return { ...state, expanded_notes: [...state.expanded_notes, action.payload] }

        case EXPAND_SELECTED_NOTE:

            return { ...state, expanded_selected_notes: [...state.expanded_selected_notes, { id: action.payload.id, index: action.payload.index }] }

        case EXPAND_NESTED_NOTE:

            return { ...state, expanded_nested_notes: [...state.expanded_nested_notes, { id: action.payload.id, index: action.payload.index }] }

        case COLLAPSE_NOTE:

            return { ...state, expanded_notes: [...state.expanded_notes.filter(note => note !== action.payload)] }

        case COLLAPSE_SELECTED_NOTE:

            return { ...state, expanded_selected_notes: [...state.expanded_selected_notes.filter(note => note.index !== action.payload.index)] }

        case COLLAPSE_NESTED_NOTE:

            return { ...state, expanded_nested_notes: [...state.expanded_nested_notes.filter(note => note.index !== action.payload.index)] }

        case COLLAPSE_ALL:

            return { ...state, expanded_notes: [] }

        case ENABLE_EDIT_MODE:
            
            console.log("inside")
            return { ...state, edit_mode_notes: [...state.edit_mode_notes, action.payload] }

        case ENABLE_EDIT_MODE_NESTED:

            return { ...state, edit_mode_nested_notes: [...state.edit_mode_nested_notes, { id: action.payload.id, index: action.payload.index }] }

        case DISABLE_EDIT_MODE:

        console.log("inside")

            return { ...state, edit_mode_notes: [...state.edit_mode_notes.filter(note => note !== action.payload)] }

        case DISABLE_EDIT_MODE_NESTED:

            console.log("inside")

            return { ...state, edit_mode_nested_notes: [...state.edit_mode_nested_notes.filter(note => note.index !== action.payload.index)] }

        case SET_DUPLICATE_TITLE:

            return { ...state, duplicate_titles: [...state.duplicate_titles, {id:action.payload.id, index:action.payload.index}] }

        case CLEAR_DUPLICATE_TITLE:

            return { ...state, duplicate_titles: [...state.duplicate_titles.filter(note => note.index !== action.payload.index)] }

        default:

            return state;
    }

}

export default handle_note_toggle
