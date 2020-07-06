import { collapse_note } from "../../../Store/Actions/1_note_action"
import { submit_form } from "../../../Store/Actions/0_submit_form_action"

//this function is triggered when the user pressed the delete note button
const handle_delete_click = (title, dispatch, props) => {

    dispatch(collapse_note(props.details._id))//remove the note from the array of expanded notes

    dispatch(submit_form({ user_id: "5eecd941331a770017a74e44", title: title }, "delete_note"))//submit a delete request to the backend

}

export default handle_delete_click