const toggle_input = (button, input_open, set_input_open) => {

    switch (button) {//switch the type (way the input was opened)

        case "alt_text"://if it was the login/signup text

            if (input_open) return set_input_open(false)//close the input
            else return set_input_open("login");//open the login input

        case "signup":

            return set_input_open("signup")//if it was by the signup button, open the signup input
        default: return
    }
}

export default toggle_input