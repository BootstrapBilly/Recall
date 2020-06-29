const generate_form_labels = (form_step, form_type) => {

    switch (form_step) {

        case "selection":

            return ["What would you like to add ?", null]

        case "title":

            return ["What's the title ?", `TITLE OF ${form_type.toUpperCase()}`]

        case "body":

            return ["What's it about ?", `CONTENT OF ${form_type.toUpperCase()}`]

        case "optionals":

            return ["Additional information", `SUBJECT OF ${form_type.toUpperCase()}`, `TAGS FOR EASIER SEARCHING`]

        case "syntax"://only when adding a note

            return ["Would you like to add some code ?", `SYNTAX OF NOTE`]

        case "notes"://only when adding a collection

            return ["Add at least two notes", `SEARCH FOR NOTES `]

        default: return
    }

}

export default generate_form_labels