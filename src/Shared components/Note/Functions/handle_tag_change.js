//this function is triggered by the searchtags component when a user adds or removes a search tag during edit mode
const handle_tag_change = (tags, set_overwritten_values, overwritten_values, set_resize_note) => {

    set_overwritten_values({ ...overwritten_values, search_tags: tags })//set the new search tags
    set_resize_note(true)//resize the note to fit the new tags

}

export default handle_tag_change