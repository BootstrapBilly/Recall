import {HANDLE_SUCCESSFUL_LOGIN} from "../Actions/2_authentication_action"

const initialState = {//set the initial state

    user_id: null,
    token:null

}

const submit_form = (state = initialState, action) => {

    switch (action.type) {

        case HANDLE_SUCCESSFUL_LOGIN:

        return {...state, user_id:action.payload.user_id, token:action.payload.token}

        default:

            return state;
    }

}

export default submit_form
