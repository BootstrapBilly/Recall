import {MARK_SERVER_AWAKE} from "../Actions/6_wake_up_server_action"

const initialState = {//set the initial state

    awake: false
}

const active_link = (state = initialState, action) => {

    switch (action.type) {

        case MARK_SERVER_AWAKE:

        return {...state, awake:true}

        default:

            return state;
    }

}

export default active_link
