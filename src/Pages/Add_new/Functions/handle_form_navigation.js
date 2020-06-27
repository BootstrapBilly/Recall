/* This function navigates backwards and fowards through the signup form depending on what button is clicked

If the next button is pressed, it submits a request to the backend with the given information

The response is then handled in form.js in the useeffect on LINE 45

If the email/username was validated, the effect with navigate to the next step of the form

If it failed, the effect will show an error explaining why to the user

The last step of the form submits a signup request with all the info, rather than validating one specific */

import { submit_form, clear_response } from "../../../Store/Actions/0_submit_form_action"

const handle_form_navigation = (direction, set_form_type, set_show_form_navigation_buttons, form_step, set_form_step, form_data, dispatch) => {

    switch (form_step) {//switch the current step of the form

        case "title"://if its title, 

            if(direction === "back"){
                set_show_form_navigation_buttons(null)
                set_form_type(null)
                set_form_step("selection")
                return dispatch(clear_response())
            }

            else return dispatch(submit_form({ title: form_data.title, user_id: "5eecd941331a770017a74e44" }, "check_note_title"))

        case "body"://if its body

        if(direction === "back"){
            return set_form_step("title")
        }

        else return set_form_step("optionals")

        case "optionals"://if its body

        if(direction === "back"){
            return set_form_step("body")
        }

        else return set_form_step("syntax")

        case "syntax"://if its body

        if(direction === "back"){
            return set_form_step("optionals")
        }

        else return dispatch(submit_form({...form_data, user_id: "5eecd941331a770017a74e44" }, "notes"))

        default: return

    }
}

export default handle_form_navigation