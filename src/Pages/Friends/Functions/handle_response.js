import { submit_form } from "../../../Store/Actions/0_submit_form_action"
import alert from "easyalert"

const handle_response = (response, dispatch, set_friends, user_id) => {

    switch (response.data.message) {

        case "Friends, pending and outgoing retreived": return set_friends(response.data.friends)

        case "Request sent":

            alert("Friend request sent", "success")
            return dispatch(submit_form({ user_id: user_id }, "get_friends"))

        case "Request denied":

            alert("Friend request denied", "success")
            return dispatch(submit_form({ user_id: user_id }, "get_friends"))

        case "Friend added":

            alert("Friend request accepted", "success")
            return dispatch(submit_form({ user_id: user_id }, "get_friends"))

        case "Request cancelled":

            alert("Friend request cancelled", "success")
            return dispatch(submit_form({ user_id: user_id }, "get_friends"))

        case "Friend removed":

            alert("Friend removed", "success")
            return dispatch(submit_form({ user_id: user_id }, "get_friends"))
    }

}

export default handle_response