const fetch_note_id = (response, props) => {

    if (response && response.data.message === "Note added successfully") return response.data.note._id

    else return props.details._id

}

export default fetch_note_id