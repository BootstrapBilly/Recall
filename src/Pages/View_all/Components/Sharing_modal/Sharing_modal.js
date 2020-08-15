import React, { useState} from 'react'

import classes from './Sharing_modal.module.css'

//components
import Note from "../../../../Shared components/Note/Note"
import SearchUsers from "../../../Friends/Components/Search_users/Search_users"
import BackArrow from "../../../../Shared components/Back_arrow/Back_arrow"
import RemoveAccess from "./Components/Remove_access/Remove_access"

//redux hooks
import { useDispatch, useSelector } from "react-redux"
import { submit_form } from '../../../../Store/Actions/0_submit_form_action'
import colours from '../../../../util/colours'

export const Sharing_modal = props => {

    //?selectors
    const user_id = useSelector(state => state.auth.user_id)

    //-config
    const dispatch = useDispatch()

    //*states
    const [active_toggle_link, set_active_toggle_link] = useState("Share")


    return (

        <div className={classes.container}>

            <BackArrow onClick={props.handle_close} />

            <div className={classes.top_section}>

                <span className={classes.title} style={{ color: colours.primary }}>Share with friends</span>

                <Note details={props.details} inside_sharing_modal />

            </div>

            <div className={classes.toggle_bar} style={{ backgroundColor: colours.green }}>

                {["Share", "Unshare"].map(link =>

                    <span className={classes.toggle_link} style={{ color: `${active_toggle_link === link ? colours.white : `${colours.white}80`}` }} onClick={() => set_active_toggle_link(link)}>{link}</span>

                )}

            </div>

            <div className={classes.bottom_section}>

                {active_toggle_link === "Share" ?

                    <SearchUsers title={"Who would you like to share it with?"} colour="black" share_mode note_details={props.details}

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

                    : <RemoveAccess users={props.details.access_rights} note_details={props.details} />}

            </div>

        </div>

    )

}

export default Sharing_modal
