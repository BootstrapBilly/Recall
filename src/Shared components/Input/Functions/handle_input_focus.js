import {clear_response} from "../../../Store/Actions/0_submit_form_action"

const handle_input_focus = (props, set_input_focused, erroneous_field, set_erroneous_field, dispatch) => {

    set_input_focused(true)//set the input focus true to highlight the field

    if (erroneous_field === props.label) {//if there is an error, and it is this input

        dispatch(clear_response())//clear the response
        set_erroneous_field(null)//and clear the error to remove the red highlight
    }

}

export default handle_input_focus