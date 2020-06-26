const handle_dynamic_button_display = (form_type, user_details, set_show_submit_button, manual_signup_form_step, set_show_form_navigation_buttons) => {

    switch (form_type) {//switch the type of form

        case "login"://if its a login form

            //if the email or password are null or empty,           do not show the submit button
            if (!user_details.email || !user_details.password) return set_show_submit_button(false)
            else return set_show_submit_button(true)//otherwise, if it is populated, show it

        case "signup"://if its a signup form

            switch (manual_signup_form_step) {//switch the current step/stage of the form

                case "email"://if they are on step 1 - email,

                    //and the email is populated (not empty)
                    if (user_details.email) return set_show_form_navigation_buttons("next");//show the next button
                    else return set_show_form_navigation_buttons(false)//otherwise do not show the next button


                case "username"://if they are on step 2 - username,

                    //and the email is not null or empty, 
                    if (!user_details.username) return set_show_form_navigation_buttons("back");//only show the back button(next button greyed out)

                    else return set_show_form_navigation_buttons("both");//otherwise if it is populated, show both the back and next buttons


                case "password"://if they are on the final password step

                    //and both passwords are populated, show the back and submit button
                    if (user_details.password && user_details.repeat_password) return set_show_form_navigation_buttons("submit")
                    //otherwise, show the back button and a greyed out submit
                    else return set_show_form_navigation_buttons("back_submit")

                default: return
            }



        case "facebook"://if it is a facebook form where they only enter their username

            //if the username is null or empty,
            if (!user_details.username) return set_show_submit_button(false)//do not show the submit button
            //otherwise if it is populated, show the button
            else return set_show_submit_button(true)

        default: return
    }


}

export default handle_dynamic_button_display