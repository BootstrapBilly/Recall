const generate_form_labels = (current_step) => {

    switch(current_step){

        case "initial": return ["What notes would you like to combine ?"]

        default: return []
    }

}

export default generate_form_labels