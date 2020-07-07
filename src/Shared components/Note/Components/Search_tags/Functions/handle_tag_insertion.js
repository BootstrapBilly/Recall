 //this function is called when the user presses enter or the add new tag button after typing in a new tag during edit mode
const handle_tag_insertion = (search_tags, set_search_tags, new_tag, set_new_tag) => {

    if(search_tags.find(tag => tag === new_tag.toLowerCase())) return //if the tag is already present, do not insert it (converted to lower to match the case retreived from the database)

    set_search_tags(search_tags => [...search_tags, new_tag])//insert the new tag into the search tags array/state

    set_new_tag("")//reset the new tag value/state

}

export default handle_tag_insertion