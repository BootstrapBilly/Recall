import {submit_form} from "../Store/Actions/0_submit_form_action"
import {collapse_all} from "../Store/Actions/1_note_action"

const filter_notes_by_search = (dispatch, string) => {

    if(!string) return dispatch(submit_form({ user_id: "5eecd941331a770017a74e44" }, "get_all"))

    dispatch(collapse_all())
    dispatch(submit_form({ user_id: "5eecd941331a770017a74e44", search_string:string }, "search"))

}

export default filter_notes_by_search