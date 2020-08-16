const generate_form_labels = (form_step, combine_notes) => {

    switch (form_step) {

        case "note_selection": return ["Which notes would you like to combine ?"]

        case "selection":

            return ["What would you like to add ?", null]

        case "title":

            return ["What's the title ?", `TITLE OF ${combine_notes ? "COLLECTION" : "NOTE"}`]

        case "body":

            return ["What's it about ?", `DESCRIPTION OF ${combine_notes ? "COLLECTION" : "NOTE"}`]

        case "optionals":

            return ["Additional information", `SUBJECT OF ${combine_notes ? "COLLECTION" : "NOTE"}`, `TAGS FOR EASIER SEARCHING`]

        case "syntax"://only when adding a note

            return ["Add some code ?", `SYNTAX OF NOTE`]

        case "notes"://only when adding a collection

            return ["Add at least two notes", `SEARCH FOR NOTES `]

        case "success": //when it has been added successfully

        return ["Added successfully !", null]

        default: return
    }

}

export default generate_form_labels