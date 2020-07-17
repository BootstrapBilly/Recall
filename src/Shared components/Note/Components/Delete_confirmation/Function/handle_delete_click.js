import { collapse_note } from "../../../../../Store/Actions/1_note_action"
import { submit_form } from "../../../../../Store/Actions/0_submit_form_action"

//this function is triggered when the user pressed the delete note button
const handle_delete_click = (dispatch, title, id, props, is_a_collection, user_id) => {

    dispatch(collapse_note(id))//remove the note from the array of expanded notes, so that other notes are not expanded

    props.cancel_delete()//cancel delete mode so that other notes will not be in delete mode

    if(is_a_collection){

        return dispatch(submit_form({ user_id: user_id, title: title }, "delete_process"))//submit a delete request to the backend

    }

   else return dispatch(submit_form({ user_id: user_id, title: title }, "delete_note"))//submit a delete request to the backend

}

export default handle_delete_click