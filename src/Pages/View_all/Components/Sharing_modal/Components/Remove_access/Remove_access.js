import React, { useEffect, useState } from 'react'

//css
import classes from './Remove_access.module.css'

//components
import User from "../../../../../../Pages/Friends/Components/User/User"

//redux action creators
import { useDispatch, useSelector } from "react-redux"
import { submit_form } from '../../../../../../Store/Actions/0_submit_form_action'

export const Users_with_access = props => {

    //?selectors
    const user_id = useSelector(state => state.auth.user_id)
    const response = useSelector(state => state.form.response)

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook

    //*states
    const [users, set_users] = useState(null)

    useEffect(() => {

        dispatch(submit_form({ user_id: user_id, note_id: props.note_details._id }, "get_single_note"))
        // eslint-disable-next-line
    }, [])

    useEffect(() => {

        if (response && response.data.message === "Rights removed") dispatch(submit_form({ user_id: user_id, note_id: props.note_details._id }, "get_single_note"))

        if (response && response.data.message === "Note retrieved successfully") set_users(response.data.note.access_rights)
        // eslint-disable-next-line
    }, [response])

    const handle_revoke_access = user => {

        dispatch(submit_form({ user_id: user_id, friend_id: user._id, note_or_process_id: props.note_details._id, type: props.note_details.notes ? "process" : "note" }, "remove_access"))

    }


    return (

        <div className={classes.container}>

            <span className={classes.title}>Friends who can see this note</span>
            <span className={classes.title_prompt}>Click to unshare with them</span>

            {users && users.map(user =>

                <User details={user.user_id} key={user.user_id._id} remove_access onClick={() => handle_revoke_access(user.user_id)} />

            )}

        </div>

    )

}

export default Users_with_access
