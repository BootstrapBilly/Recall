const generate_form_labels = (current_step) => {

    switch(current_step){

        case "note_selection": return ["Which notes would you like to combine ?"]

        default: return []
    }

}

export default generate_form_labels