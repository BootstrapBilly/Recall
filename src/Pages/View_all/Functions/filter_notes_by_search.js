import {submit_form} from "../../../Store/Actions/0_submit_form_action"

const filter_notes_by_search = (dispatch, string, user_id) => {

    if(!string) return dispatch(submit_form({ user_id: user_id }, "get_all"))

    
    dispatch(submit_form({ user_id: user_id, search_string:string }, "search"))

}

export default filter_notes_by_search