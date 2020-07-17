const reset_form = (set_current_step, set_form_data, set_show_form_navigation_buttons, form_data) => {//used to reset the form back to the type selection (1st screen note or collection)

    if (form_data && form_data.selected_notes.length) set_current_step("note_selection")//set the step back to selection

    else set_current_step("title")//set the step back to selection

    set_form_data({//reset all the form data to default

        title: null,
        subject: null,
        search_tags: null,
        body: null,
        syntax: null,
        selected_notes: []

    })

    set_show_form_navigation_buttons(false)//reset the navigation buttons so they do not show on the selection screen
}

export default reset_form