import {submit_form} from "../../../Store/Actions/0_submit_form_action"

const filter_notes_by_search = (dispatch, string) => {

    if(!string) return dispatch(submit_form({ user_id: "5eecd941331a770017a74e44" }, "get_notes"))

    dispatch(submit_form({ user_id: "5eecd941331a770017a74e44", search_string:string }, "search"))

}

export default filter_notes_by_search