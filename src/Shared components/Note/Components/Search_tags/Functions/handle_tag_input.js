//this function controls the add new search tag input during edit mode
const handle_tag_input = (event, new_tag, set_new_tag) => {

    if (event.target.value === " ") return

    if (!/^\w+$/.test(event.target.value) && new_tag.length > 1) return //if the key being pressed is not 0-9/aA-zZ, do not update the value

    set_new_tag(event.target.value)//otherwise, update the value

}

export default handle_tag_input