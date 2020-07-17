const fetch_note_id = (response, props) => {

    if (response && response.data.message === "Note added successfully") return response.data.note._id

    if (response && response.data.message === "process added successfully") return response.data.process._id

    else return props.details._id

}

export default fetch_note_id