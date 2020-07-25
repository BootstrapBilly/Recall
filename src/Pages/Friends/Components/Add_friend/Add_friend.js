import React, { useState, useEffect } from 'react'

//css
import classes from './Add_friend.module.css'

//util
import colours from '../../../../util/colours'
import handle_column_assignment from "../../../../util/handle_column_assignment"

//components
import SearchBox from "../../../../Shared components/Top_bar/Components/Search_box"
import User from "./Components/User"

//redux hooks
import { useSelector, useDispatch } from "react-redux"

//redux action creators
import { submit_form } from "../../../../Store/Actions/0_submit_form_action"

//external
import Masonry from 'react-masonry-css'

export const Add_friend = () => {

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

        if (!search_value) return set_users_to_display([])
        dispatch(submit_form({ user_id: user_id, search_string: search_value }, "search_user"))

    }, [search_value])

    useEffect(() => {

        if (response) set_users_to_display(response.data.users)

    }, [response])

    const handle_add_user = details => {

        console.log(details)

    }
    return (

        <div className={classes.container}>

            <span className={classes.title} style={{ color: colours.primary }}>Who would you like to add ?</span>

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

                        users_to_display.map(user => <User details={user} key={user._id} onClick={(details)=> handle_add_user(details)}  />)

                    }

                </Masonry>









                // <div className={classes.users_to_display_container}>

                //     {users_to_display.map(user => <User details={user} key={user._id} />)}

                // </div>

            }
        </div>

    )

}

export default Add_friend