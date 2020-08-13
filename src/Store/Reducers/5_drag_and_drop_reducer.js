import {SET_CURRENTLY_BEING_DRAGGED, CLEAR_CURRENTLY_BEING_DRAGGED} from "../Actions/5_drag_and_drop_action"

const initialState = {//set the initial state

    being_dragged: null
}

const active_link = (state = initialState, action) => {

    switch (action.type) {

        case SET_CURRENTLY_BEING_DRAGGED:

        return {...state, being_dragged:{note:action.payload.note, index:action.payload.index}}

        case CLEAR_CURRENTLY_BEING_DRAGGED:

        return {...state, being_dragged:null}

        default:

            return state;
    }

}

export default active_link
