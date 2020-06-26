const handle_dynamic_button_display = (form_type, form_data, form_step, set_show_form_navigation_buttons) => {

    switch (form_step) {//switch the type of form

        case "title":
        if (form_data.title) return set_show_form_navigation_buttons("both"); else return set_show_form_navigation_buttons("back")

        case "body":
        if (form_data.body) return set_show_form_navigation_buttons("both"); else return set_show_form_navigation_buttons("back")

        case "optionals":
        if (form_data.subject || form_data.search_tags.length) return set_show_form_navigation_buttons("both"); else return set_show_form_navigation_buttons("skip")

        case "syntax":
        return set_show_form_navigation_buttons("add")

        default: return
    }


}

export default handle_dynamic_button_display