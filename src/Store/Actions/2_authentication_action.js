export const HANDLE_SUCCESSFUL_LOGIN = "HANDLE_SUCCESSFUL_LOGIN";
export const HANDLE_LOGOUT = "HANDLE_LOGOUT";

export const handle_successful_login = (token, user_id, username) => {

    return async dispatch => {

        try {

            window.localStorage.setItem("user_id", user_id)
            window.localStorage.setItem("username", username)
            window.localStorage.setItem("token", token)

            return dispatch({type:HANDLE_SUCCESSFUL_LOGIN, payload:{token:token, user_id:user_id, username:username}})

        }

        catch (error) {

            console.log(error)

        }

    }

}

export const handle_logout = () => {

    return async dispatch => {

        try {

            window.localStorage.removeItem("user_id")
            window.localStorage.removeItem("token")
            window.localStorage.removeItem("username")

            return dispatch({type:HANDLE_LOGOUT})

        }

        catch (error) {

            console.log(error)

        }

    }

}



