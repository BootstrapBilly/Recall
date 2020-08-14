const check_if_note_is_expanded = (props, expanded_nested_notes, expanded_selected_notes, expanded_notes, note_id) => {

  //determine if the note is expanded
    //expanded notes are set and fetched by redux, there is a seperate array for nested notes, selected notes and normal notes (so expanding a selected note does not expand the unselected/unnested version at the same time)

    if(props.inside_collection || props.re_arrange || props.explanation) return true
    
   //return expanded_nested_notes.find(note => note.id === props.details._id && note.index === props.index)//check the array of nested note

    else if(props.selected) return expanded_selected_notes.find(note => note.id === note_id && note.index === props.index)//check the array of selected note

    else return expanded_notes.find(note => note === note_id)//Check the array of normal notes

}

export default check_if_note_is_expanded