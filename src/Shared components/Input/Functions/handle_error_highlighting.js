const handle_error_highlighting = (response, set_erroneous_field) => {
    
    switch (response.data.message) {//switch the form response message

        case "Sorry, that email/username does not exist in our database":
            return set_erroneous_field("Username or email")

        case "Sorry, your password is incorrect":
            return set_erroneous_field("Password")

        case "Sorry, your old password is incorrect":
            return set_erroneous_field("Old password")//this may seem like a duplicate, however it is necessary for the field with "Old password" instead of "password"

        case "Sorry, that email is unavailable":
            return set_erroneous_field("Email address")

        case "Sorry, that username is unavailable":
            return set_erroneous_field("Username")

        case "Sorry, that username is not available": 
            return set_erroneous_field("New username")//this may seem like a duplicate, however it is necessary for the field with "New username" instead of "username"

        case "Your password must be at least 8 characters":
            return set_erroneous_field("Password")

        case "Your password must contain at least 1 uppercase letter":
            return set_erroneous_field("Password")

        case "Your passwords must match":
            return set_erroneous_field("Repeat password")

        case "You already have a note with that title, please choose another":
            return set_erroneous_field("TITLE OF NOTE")

        default: return;
    }

}

export default handle_error_highlighting