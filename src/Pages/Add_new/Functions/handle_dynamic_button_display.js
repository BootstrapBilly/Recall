const handle_dynamic_button_display = (form_type, form_data, form_step, set_show_form_navigation_buttons) => {

    switch (form_step) {//switch the current step of the form

        case "title"://title step

        //if the title is truish, show both buttons,                            if not, show only the back button
        if (form_data.title) return set_show_form_navigation_buttons("both"); else return set_show_form_navigation_buttons("back")

        case "body"://body step

        //if the body is truish, show both buttons,                            if not, show only the back button
        if (form_data.body) return set_show_form_navigation_buttons("both"); else return set_show_form_navigation_buttons("back")

        case "optionals"://subject and search tags step

        //if the subject or search tags are truish, show both buttons,                            if not, show skip button
        if (form_data.subject || form_data.search_tags) return set_show_form_navigation_buttons("both"); else return set_show_form_navigation_buttons("skip")

        case "syntax"://syntax step (only when adding a note)
        
        //show the add new button
        return set_show_form_navigation_buttons("add")

        case "notes"://syntax step (only when adding a collection)
        
        //show the add new button
        return set_show_form_navigation_buttons("back")

        default: return
    }


}

export default handle_dynamic_button_display