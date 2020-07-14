import {disable_edit_mode, collapse_note, collapse_selected_note, collapse_nested_note } from "../../../Store/Actions/1_note_action"

//this function is triggered when the user presses the toggle button on an expanded note
const handle_collapse = (dispatch, props, note_is_selected, note_is_nested_in_collection, selected_note_index) => {

    console.log(selected_note_index)

    if(note_is_nested_in_collection) return dispatch(collapse_nested_note(props.details._id, selected_note_index))

    if(note_is_selected) return dispatch(collapse_selected_note(props.details._id, selected_note_index))

    dispatch(disable_edit_mode(props.details._id))//remove the note from the array of edit mode enabled notes
    dispatch(collapse_note(props.details._id))//remove the note from the array of expanded notes
}

export default handle_collapse