import { submit_form } from "../../../Store/Actions/0_submit_form_action"

//This function is triggered when the user presses the save button during edit mode
const handle_save_click = (dispatch, overwritten_values, props) => {

    return dispatch(submit_form({//the current values of the form are saved into the overwritten_values state, then submited to the backend for processing

        user_id: "5eecd941331a770017a74e44",
        title: props.details.title,
        new_title: overwritten_values.title || props.details.title,
        new_subject: overwritten_values.subject || props.details.subject,
        new_body: overwritten_values.body || props.details.body,
        new_search_tags: overwritten_values.search_tags || props.details.search_tags,
        new_syntax: overwritten_values.syntax || props.details.syntax
    }
        , "update_note"))

}

export default handle_save_click