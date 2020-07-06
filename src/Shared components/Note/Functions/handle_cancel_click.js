import {disable_edit_mode} from "../../../Store/Actions/1_note_action"

//this function is triggered by pressing the cancel button during edit mode

const handle_cancel_click = (dispatch, id, set_overwritten_values, set_re_render_tags) => {

    dispatch(disable_edit_mode(id))//remove the note from the array of edit mode enabled notes

    set_overwritten_values({//set the form data back to the initial values fetched from the database and passed in by the parent component

        title: null,
        subject: null,
        search_tags: null,//used to make searching easier and faster
        body: null,
        syntax: null,//stores the syntax NOTE ONLY
        notes: []//holds an array of notes collection ONLY

    })

    set_re_render_tags(true)//set the re-render state in order to trigger a re-render of search tags which may have been changed

}

export default handle_cancel_click