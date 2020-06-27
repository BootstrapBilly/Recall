const toggle_input = (button, show_input, set_show_input) => {

    switch (button) {//switch the type (way the input was opened)

        case "alt_text"://if it was the login/signup text ("Already have an account? login now")

            //and the input is currently signup
            if (show_input === "signup") return set_show_input("login")//transform it to the login input

            //if its currently on login
            if (show_input === "login") return set_show_input("hidden")//close it

            //otherwise if its not open,
            else return set_show_input("login");//open it on login

        case "signup":

            return set_show_input("signup")//if it was by the signup button, open the signup input

        default: return
    }
}

export default toggle_input