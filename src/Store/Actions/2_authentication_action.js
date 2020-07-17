export const HANDLE_SUCCESSFUL_LOGIN = "HANDLE_SUCCESSFUL_LOGIN";

export const handle_successful_login = (token, user_id) => {

    return async dispatch => {

        try {

            window.localStorage.setItem("user_id", user_id)
            window.localStorage.setItem("token", token)
            
            return dispatch({type:HANDLE_SUCCESSFUL_LOGIN, payload:{token:token, user_id:user_id}})

        }

        catch (error) {

            console.log(error)

        }

    }

}



