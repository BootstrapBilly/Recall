const check_if_note_is_in_edit_mode = (props, edit_mode_enabled_notes, edit_mode_enabled_nested_notes, note_id) => {

    //determine if the note is in edit mode
    //edit mode enabled notes are set and fetched by redux, there is a seperate array for nested notes and non nested notes (so enabling edit mode on a nested note does not enable editmode the unnested version at the same time)

    if (props.inside_collection) return edit_mode_enabled_nested_notes.find(note => note.id === props.details._id && note.index === props.index)//check the array of nested note

    else return edit_mode_enabled_notes.find(note => note === note_id)//Check the array of normal notes

}

export default check_if_note_is_in_edit_mode