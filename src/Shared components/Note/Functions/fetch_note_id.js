const fetch_note_id = (response, props) => {

    if (response && response.data.message === "Note added successfully") return response.data.note._id

    if (response && props.from_add_form && response.data.message === "note updated successfully") return response.data.id

    if (props.from_add_form) return response.id

    else return props.details._id

}

export default fetch_note_id