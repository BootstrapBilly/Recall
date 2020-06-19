import {API_RESPONSE} from "../Actions/0_submit_form_action"

const initialState = {//set the initial state

    response: null

}

const submit_form = (state = initialState, action) => {

    switch (action.type) {

        case API_RESPONSE:

        return {...state, response:action.payload}

        default:

            return state;
    }

}

export default submit_form
