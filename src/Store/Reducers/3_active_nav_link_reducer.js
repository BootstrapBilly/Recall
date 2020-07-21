import {SET_ACTIVE_LINK} from "../Actions/3_active_nav_link_action"

const initialState = {//set the initial state

    link: "Home"
}

const active_link = (state = initialState, action) => {

    switch (action.type) {

        case SET_ACTIVE_LINK:

        return {...state, link:action.payload}

        default:

            return state;
    }

}

export default active_link
