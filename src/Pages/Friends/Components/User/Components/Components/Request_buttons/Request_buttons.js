import React from 'react'

import classes from './Request_buttons.module.css'

//util
import colours from '../../../../../../../util/colours'

//redux hooks
import {useDispatch, useSelector} from "react-redux"
import { submit_form } from '../../../../../../../Store/Actions/0_submit_form_action'

export const Request_buttons = props => {

    //?selectors
    const user_id = useSelector(state => state.auth.user_id)
    const response = useSelector(state => state.form.response)

    //-config
    const dispatch = useDispatch()//intialise the dispatch hook

    const handle_process_friend_request = decision => {

        dispatch(submit_form({ requestee_user_id: user_id, requester_user_id: props.details._id, decision:decision }, "process_friend_request"))

    }


    return (

        <div className={classes.container}>

           <div className={classes.button} test_handle="deny_button" style={{backgroundColor:colours.red}} onClick={()=> handle_process_friend_request(false)}>Deny</div>
           <div className={classes.button} test_handle="accept_button"  style={{backgroundColor:colours.green}} onClick={()=> handle_process_friend_request(true)}>Accept</div>
            
        </div>

    )

}

export default Request_buttons