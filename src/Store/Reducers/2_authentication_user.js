import {HANDLE_SUCCESSFUL_LOGIN, HANDLE_LOGOUT} from "../Actions/2_authentication_action"

const initialState = {//set the initial state

    user_id: null,
    token:null

}

const login = (state = initialState, action) => {

    switch (action.type) {

        case HANDLE_SUCCESSFUL_LOGIN:

        return {...state, user_id:action.payload.user_id, token:action.payload.token}

        case HANDLE_LOGOUT:

        return {...state, user_id:null, token:null}

        default:

            return state;
    }

}

export default login
