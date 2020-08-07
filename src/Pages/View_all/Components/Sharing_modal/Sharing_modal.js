import React, { useState } from 'react'

import classes from './Sharing_modal.module.css'

//components
import Note from "../../../../Shared components/Note/Note"
import SearchUsers from "../../../Friends/Components/Search_users/Search_users"
import BackArrow from "../../../../Shared components/Back_arrow/Back_arrow"

//redux hooks
import { useDispatch, useSelector } from "react-redux"
import { submit_form } from '../../../../Store/Actions/0_submit_form_action'

export const Sharing_modal = props => {

    //?selectors
    const user_id = useSelector(state => state.auth.user_id)
    const response = useSelector(state => state.form.response)

    //-config
    const dispatch = useDispatch()

    if(response){ console.log(response)}

    return (

        <div className={classes.container}>

            <BackArrow onClick={props.handle_close} />

            <div className={classes.top_section}>

                <Note details={props.details} inside_sharing_modal />

            </div>

            <div className={classes.bottom_section}>

                <SearchUsers title={"Who would you like to share it with?"} colour="black" share_mode

                    handle_select_user={(details) =>

                        dispatch(submit_form(

                            {
                                user_id: user_id,
                                friend_id: details._id,
                                note_or_process_id: props.details._id,
                                type: props.details.notes ? "process" : "note"
                            }
                            ,
                            "share_access"))} />

            </div>

        </div>

    )

}

export default Sharing_modal
