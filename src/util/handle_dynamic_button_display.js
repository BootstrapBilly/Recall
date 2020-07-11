const handle_dynamic_button_display = (form_type, form_data, form_step, set_show_form_navigation_buttons, selected_notes) => {

    switch (form_step) {//switch the current step of the form

        case "title"://title step

        //if the title is truish, show both buttons,                            if not, show only the back button
        if (form_data.title) return set_show_form_navigation_buttons("next"); else return set_show_form_navigation_buttons("grey_next")

        case "body"://body step

        //if the body is truish, show both buttons,                            if not, show only the back button
        if (form_data.body) return set_show_form_navigation_buttons("both"); else return set_show_form_navigation_buttons("back")

        case "optionals"://subject and search tags step

        if(form_type === "collection") return set_show_form_navigation_buttons("add")
        
        //if the subject or search tags are truish, show both buttons,                            if not, show skip button
        if (form_data.subject || form_data.search_tags) return set_show_form_navigation_buttons("both"); else return set_show_form_navigation_buttons("skip")

        case "syntax"://syntax step (only when adding a note)
        
        //show the add new button
        return set_show_form_navigation_buttons("add")

        case "notes"://notes step (only when adding a collection)
        if(selected_notes.length >= 2) return set_show_form_navigation_buttons("both")
        //show the add new button
        else return set_show_form_navigation_buttons("back")

        case "success":

        return set_show_form_navigation_buttons("success")

        default: return
    }


}

export default handle_dynamic_button_display