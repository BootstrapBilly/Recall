/* This function navigates backwards and fowards through the signup form depending on what button is clicked

If the next button is pressed, it submits a request to the backend with the given information

The response is then handled in form.js in the useeffect on LINE 45

If the email/username was validated, the effect with navigate to the next step of the form

If it failed, the effect will show an error explaining why to the user

The last step of the form submits a signup request with all the info, rather than validating one specific */

import { submit_form } from "../../../../../Store/Actions/0_submit_form_action"

const handle_form_navigation = (direction, manual_signup_form_step, set_manual_signup_form_step, user_details, dispatch) => {

    switch (manual_signup_form_step) {//switch the current step of the form

        case "email"://if its email, 

            //send the email to the backend to check that its valid
            return dispatch(submit_form({ email: user_details.email }, "check_email"))

        case "username"://if the step is username

            //and they clicked the back button
            direction === "back" ? set_manual_signup_form_step("email")//navigate back to the email step 

                //otherwise, send the username to the backend to check that its valid
                : dispatch(submit_form({ username: user_details.username }, "check_username"))

            break;

        case "password"://if the step is password

            //and they clicked the back button
            direction === "back" ? set_manual_signup_form_step("username")//navigate back to the username step 

                //otherwise, submit the request to sign the user up
                : dispatch(submit_form(user_details, "user"))

            break;

            default : return

    }
}

export default handle_form_navigation