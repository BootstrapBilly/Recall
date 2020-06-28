const generate_form_labels = (form_step, form_type) => {

    switch (form_step) {

        case "selection":

            return ["What would you like to add ?", null]

        case "title":

            return ["What's the title ?", `TITLE OF ${form_type.toUpperCase()}`]

        case "body":

            return ["What's it about ?", `BODY OF ${form_type.toUpperCase()}`]

        case "optionals":

            return ["Optional extra information", `SUBJECT OF ${form_type.toUpperCase()}`, `TAGS FOR EASIER SEARCHING`]

        case "syntax"://only when adding a note

            return ["Optional syntax", `SYNTAX OF NOTE`]

        case "notes"://only when adding a collection

            return ["Add at least one note", `SEARCH FOR NOTES `]

        default: return
    }

}

export default generate_form_labels