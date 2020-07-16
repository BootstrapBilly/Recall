import {enable_edit_mode, enable_edit_mode_nested} from "../../../Store/Actions/1_note_action"

const handle_edit_click = (props, note_id, dispatch) => {

    if(props.inside_collection) return dispatch(enable_edit_mode_nested(note_id, props.index))

    else return dispatch(enable_edit_mode(note_id))

    // props.inside_collection ? dispatch(enable_edit_mode_nested(note_id, props.index)) : dispatch(enable_edit_mode(note_id))

}

export default handle_edit_click