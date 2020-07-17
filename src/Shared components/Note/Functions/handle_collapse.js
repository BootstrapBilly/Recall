import { clear_duplicate_title, disable_edit_mode, disable_edit_mode_nested, collapse_note, collapse_selected_note, collapse_nested_note } from "../../../Store/Actions/1_note_action"

//this function is triggered when the user presses the toggle button on an expanded note
const handle_collapse = (dispatch, props, note_is_selected, note_is_nested_in_collection, index, note_id, is_a_collection) => {

    dispatch(clear_duplicate_title(note_id, index))//remove the note from the array of duplicate titles so it doesn't stay red when collapsed

    if(is_a_collection){

        props.details.notes.forEach((note,index)=> {

            dispatch(disable_edit_mode_nested(note._id, index))
            dispatch(collapse_nested_note(note._id, index))

        })
    }    

    if (note_is_nested_in_collection) {

        dispatch(disable_edit_mode_nested(note_id, index))//remove the note from the array of edit mode enabled  (nested) notes
        return dispatch(collapse_nested_note(props.details._id, index))//then remove it from the array of collapsed notes
    }

    if (note_is_selected) return dispatch(collapse_selected_note(props.details._id, index))

    dispatch(disable_edit_mode(props.details._id))//remove the note from the array of edit mode enabled notes
    dispatch(collapse_note(props.details._id))//remove the note from the array of expanded notes
}

export default handle_collapse