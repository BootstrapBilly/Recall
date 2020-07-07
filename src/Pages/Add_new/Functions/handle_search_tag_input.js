
const handle_search_tag_input = (event, form_data, set_form_data) => {

    //if the user enters 2 spaces in a row, do not update the input
    if (form_data.search_tags && event.target.value.slice(event.target.value.length - 2) === "  ") return

    if (event.target.value === " ") return//do not allow a space as the first input

    if (!/^[a-zA-Z0-9 ]*$/.test(event.target.value)) return //if the key being pressed is not 0-9/aA-zZ, or a space do not update the value

    else set_form_data({ ...form_data, search_tags: event.target.value })//otherwise update the search tags state

}

export default handle_search_tag_input

