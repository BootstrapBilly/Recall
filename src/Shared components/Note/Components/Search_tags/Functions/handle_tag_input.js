//this function controls the add new search tag input during edit mode
const handle_tag_input = (event, new_tag, set_new_tag) => {

    if (event.target.value === " ") return//do not allow the first character to be a space

    if (!/^[a-zA-Z0-9\b]*$/.test(event.target.value)) return //if the key being pressed is not 0-9/aA-zZ or backspace, do not update the value

    set_new_tag(event.target.value)//otherwise, update the value

}

export default handle_tag_input