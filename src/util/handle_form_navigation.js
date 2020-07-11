/* This function navigates backwards and fowards through the signup form depending on what button is clicked

If the next button is pressed, it submits a request to the backend with the given information

The response is then handled in add_new in the useeffect on LINE 105

If the title was validated, the effect with navigate to the next step of the form

If it failed, the input component (shared components) will detect the error and show it

The last step of the form submits a new note request with all the info */

import { submit_form } from "../Store/Actions/0_submit_form_action"

const handle_form_navigation = (direction, form_type, form_step, set_form_step, form_data, dispatch, set_notes_search_string) => {

    switch (form_step) {//switch the current step of the form

        case "title"://if they are on the title step

            if (direction === "back") {//and they press the back button

                console.log("clicko")
                // set_show_form_navigation_buttons(null)//remove the navigation buttons
                // set_form_type(null)//reset the form type
                // set_form_step("selection")//set the step back to collection so they can choose note or colelction
                // return dispatch(clear_response())//clear the current response

            }

            /* Otherwise, if they pressed next */

            //and they are adding a note,
            else if (form_type === "note" && form_data.title) {

                //submit the title to the backend, to see if it is valid and wait for the response 
                //success (handled by line 105 add_new.js), error handled by the input component (line 53)
                return dispatch(submit_form({ title: form_data.title, user_id: "5eecd941331a770017a74e44" }, "check_note_title"))

            }

            //and they are adding a note,
            else if (form_type === "collection" && form_data.title) {

                //submit the title to the backend, to see if it is valid and wait for the response 
                //success (handled by line 105 add_new.js), error handled by the input component (line 53)

                console.log("Check handle_form_nav")
                // return dispatch(submit_form({ title: form_data.title, user_id: "5eecd941331a770017a74e44" }, "check_collection_title"))

            }

            //otherwise, they are adding a collection
            //submit the title to the backend to see if that note title is already in use, wait for the response
            //success (handled by line 105 add_new.js), error handled by the input component (line 53)
            // else return dispatch(submit_form({ title: form_data.title, user_id: "5eecd941331a770017a74e44" }, "check_process_title"))

            break;

        case "body"://if they are on the body step

            //and they pressed back, navigate back to the title step
            if (direction === "back") return set_form_step("title")

            /* Otherwise, if they pressed next */

            //and they are adding a note,
            else if (form_type === "note") return set_form_step("optionals")//navigate to the optionals form step

            //otherise, if they are adding a collection
            else return set_form_step("notes")

        case "notes":

            if (direction === "back") {

                set_notes_search_string(null)
                return set_form_step("body")

            }

            else {

                set_notes_search_string(null)
                return set_form_step("optionals")//otherwise if its next/skip, navigate to the optionals step

            }


        case "optionals"://if they are on the optionals step

            if(form_type === "collection"){

                if (direction === "back") return set_form_step("notes")    

                else window.alert("yes")
                
            }
            //and they press the back button, navigate back to the body step
            if (direction === "back") return set_form_step("body")

            else return set_form_step("syntax")//otherwise if its next/skip, navigate to the syntax step

        case "syntax"://if they are on the syntax step (note only)

            //and they press the back button, navigate back to the optionals step
            if (direction === "back") return set_form_step("optionals")

            //otherwise, submit the request to add a new note
            else return dispatch(submit_form({ ...form_data, user_id: "5eecd941331a770017a74e44" }, "notes"))

        default: return

    }
}

export default handle_form_navigation