import React, { useState, useEffect } from 'react'

//css
import classes from './Search_users.module.css'

//util
import colours from '../../../../util/colours'
import handle_column_assignment from "../../../../util/handle_column_assignment"

//components
import SearchBox from "../../../../Shared components/Top_bar/Components/Search_box"
import User from "../User/User"

//redux hooks
import { useSelector, useDispatch } from "react-redux"

//redux action creators
import { submit_form, clear_response } from "../../../../Store/Actions/0_submit_form_action"

//external
import Masonry from 'react-masonry-css'
import Alert from "easyalert"

export const Add_friend = props => {

    //?selectors
    const user_id = useSelector(state => state.auth.user_id)//grab the user id from redux
    const response = useSelector(state => state.form.response)//grab the response from the api

    //-config
    const dispatch = useDispatch()//initialse the usedispatch hook

    //*states
    const [search_value, set_search_value] = useState("")//hold the value of the search box
    const [users_to_display, set_users_to_display] = useState([])

    //!effects
    useEffect(() => {

        if (!search_value) return set_users_to_display([])//if the search value is empty, show nothing

        if (props.share_mode) dispatch(submit_form({ user_id: user_id, search_string: search_value, note_id: props.note_details._id, type: props.note_details.notes ? "process" : "note" }, "search_friends"))

        else dispatch(submit_form({ user_id: user_id, search_string: search_value, unique: true }, "search_user"))
        // eslint-disable-next-line
    }, [search_value])

    useEffect(() => {

        if (response && response.data.message === "Request sent") {

            set_search_value("")
            props.handle_toggle()
            Alert("Friend request sent", "success")
            dispatch(clear_response())

        }

        if (response && response.data.message === "search executed") set_users_to_display(response.data.users)

        if (response && response.data.message === "Search through friends executed") set_users_to_display(response.data.friends)

        if (response && response.data.message === "Rights granted") {

            dispatch(submit_form({ user_id: user_id }, "get_all"))
            dispatch(submit_form({ user_id: user_id, search_string: search_value, note_id: props.note_details._id, type: props.note_details.notes ? "process" : "note" }, "search_friends"))
        }
        // eslint-disable-next-line
    }, [response])

    const handle_select_user = details => {

        if (props.share_mode) return props.handle_select_user(details)

        else dispatch(submit_form({ user_id: user_id, username: details.username }, "friend"))

    }

    return (

        <div className={classes.container}>

            <span className={classes.title} style={{ color: props.colour || colours.primary }}>{props.title ? props.title : "Who would you like to add ?"}</span>

            <SearchBox

                value={search_value}
                handle_change={e => set_search_value(e.target.value)}
                no_collapse
                clear_input={() => set_search_value("")}

            />

            {users_to_display.length >= 1 &&


                <Masonry

                    breakpointCols={handle_column_assignment(users_to_display)}
                    className={classes.my_masonry_grid}
                    columnClassName={classes.my_masonry_grid_column}
                    style={{ paddingBottom: "0px" }}>

                    {

                        users_to_display.map(user => <User details={user} key={user._id} onClick={(details) => handle_select_user(details)} add_friend />)

                    }

                </Masonry>

            }
        </div>

    )

}

export default Add_friend