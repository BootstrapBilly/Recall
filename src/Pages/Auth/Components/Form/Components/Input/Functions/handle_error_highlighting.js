const handle_error_highlighting = (response, set_erroneous_field) => {

    switch (response.data.message) {

        case "Sorry, that email/username does not exist in our database":
            return set_erroneous_field("EMAIL OR USERNAME")
        case "Sorry, your password is incorrect":
            return set_erroneous_field("PASSWORD")
        case "Sorry, that email in unavailable":
            return set_erroneous_field("EMAIL")
        case "Sorry, that username in unavailable":
            return set_erroneous_field("USERNAME")
        case "Your password must be at least 8 characters":
            return set_erroneous_field("PASSWORD")
        case "Your password must contain at least 1 uppercase letter":
            return set_erroneous_field("PASSWORD")
        case "Your passwords must match":
            return set_erroneous_field("REPEAT PASSWORD")
        default: return;
    }

}

export default handle_error_highlighting