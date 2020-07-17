import {clear_response, submit_form} from "../../../Store/Actions/0_submit_form_action"
import {set_duplicate_title, disable_edit_mode, disable_edit_mode_nested} from "../../../Store/Actions/1_note_action"

import alert from "easyalert"

const handle_response = (response, note_id, props, set_overwritten_values, dispatch) => {

    //!Duplicate title
    if (response && response.data.message === "You already have a note with that title, please choose another") {

        //if the id on the response matches the id on the note, add the note to the array of duplicate titles to be displayed
        if (response.data.id === note_id && response.data.index === props.index) { dispatch(set_duplicate_title(note_id, props.index)) }

        alert("You already have a note with that title, please choose another", "error")

        dispatch(clear_response())
 
    }

    //?Note updated
    if (response && response.data.message === "note updated successfully" && response.data.id === note_id) {//if a success message is detected

        if (response.data.position_changed) { props.handle_position_change() } //if the title has changed, meaning the notes position has changed, re-render every note

        dispatch(submit_form({ user_id: "5eecd941331a770017a74e44" }, "get_all"))//fetch the notes again with the new data

        props.inside_collection ? dispatch(disable_edit_mode_nested(note_id, props.index)) : dispatch(disable_edit_mode(note_id))//remove the note from the array of edit mode enabled notes

        set_overwritten_values({// a state to hold the note information to be submitted to the backend for editing purposes

            title: null,
            subject: null,
            search_tags: null,
            body: null,
            syntax: null,
            notes: []

        })

    }

    //*collection updated
    if (response && response.data.message === "process updated successfully" && response.data.id === note_id) {//if a success message is detected

        if (response.data.position_changed) { props.handle_position_change() } //if the title has changed, meaning the notes position has changed, re-render every note

        dispatch(submit_form({ user_id: "5eecd941331a770017a74e44" }, "get_all"))//fetch the notes again with the new data

        dispatch(disable_edit_mode(note_id))//remove the note from the array of edit mode enabled notes

        set_overwritten_values({// a state to hold the note information to be submitted to the backend for editing purposes

            title: null,
            subject: null,
            search_tags: null,
            body: null,
            syntax: null,
            notes: []

        })

    }

    //=note deleted
    if (response && response.data.message === "note deleted successfully") {

        dispatch(submit_form({ user_id: "5eecd941331a770017a74e44" }, "get_all"))
        clear_response()//clear the response

    }

    //_collection deleted
    if (response && response.data.message === "process deleted successfully") {

        dispatch(submit_form({ user_id: "5eecd941331a770017a74e44" }, "get_all"))
        clear_response()//clear the response

    }

}

export default handle_response