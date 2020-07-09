import {disable_edit_mode, collapse_note, collapse_selected_note } from "../../../Store/Actions/1_note_action"

//this function is triggered when the user presses the toggle button on an expanded note
const handle_collapse = (dispatch, props, note_is_selected, selected_note_index) => {

    if(note_is_selected) return dispatch(collapse_selected_note(props.details._id), selected_note_index)

    dispatch(disable_edit_mode(props.details._id))//remove the note from the array of edit mode enabled notes
    dispatch(collapse_note(props.details._id))//remove the note from the array of expanded notes
}

export default handle_collapse