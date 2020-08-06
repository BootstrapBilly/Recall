import React from 'react'
import classes from './User_options.module.css'

//util
import colours from '../../../../../util/colours'

//components
import RequestButtons from "./Components/Request_buttons/Request_buttons"

//redux hooks
import {useDispatch, useSelector} from "react-redux"

//redux action creators
import {submit_form} from "../../../../../Store/Actions/0_submit_form_action"

export const User_options = props => {

    //?selectors
    const user_id = useSelector(state => state.auth.user_id)

    //-config
    const dispatch = useDispatch()

    return (

        <div className={classes.container}>

        {props.type === "Pending" && 
        <div className={classes.button} style={{backgroundColor:colours.primary}}  test_handle="Cancel_request_button"
        onClick={()=> dispatch(submit_form({requester_id:user_id, requestee_id: props.details._id}, "cancel_request"))}>Cancel request</div>}

        {props.type === "Request" && <RequestButtons details={props.details}  />}

        {props.type !== "Request" && props.type !== "Pending" && <div className={classes.button} style={{backgroundColor:colours.red}} 
        test_handle="Delete_friend_button"
        onClick={()=> dispatch(submit_form({user_id:user_id, user_to_delete_id: props.details._id}, "delete_friend"))}>Delete friend</div>}

        </div>

    )

}

export default User_options