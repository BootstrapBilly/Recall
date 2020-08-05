import React, { useState, useEffect } from 'react'

//css
import classes from "./Friends.module.css"

//components
import Nav from "../../Shared components/Nav/Nav"
import TopBar from "../../Shared components/Top_bar/Top_bar"
import NoFriendsPrompt from "./Components/No_friends_prompt/No_friends_prompt"
import AddFriend from "./Components/Add_friend/Add_friend"
import User from "./Components/User/User"

//Redux hooks
import { useDispatch, useSelector } from "react-redux"

//redux action creators
import { submit_form } from '../../Store/Actions/0_submit_form_action'

//external
import Masonry from 'react-masonry-css'

//util
import handle_column_assignment from "../../util/handle_column_assignment"

export const Friends = () => {

    //?selectors
    const user_id = useSelector(state => state.auth.user_id)
    const response = useSelector(state => state.form.response)

    //-config
    const dispatch = useDispatch()

    //*states
    const [current_content, set_current_content] = useState("Friends")
    const [friends, set_friends] = useState([])

    useEffect(() => {

        dispatch(submit_form({ user_id: user_id }, "get_friends"))

    }, [user_id])

    useEffect(() => {

        if (response && response.data.message === "Friends retreived") {

            console.log(response)
    
            set_friends(response.data.friends)

        }

        if (response && response.data.message === "Request sent") {

            dispatch(submit_form({ user_id: user_id }, "get_friends"))
        }

    }, [response])

    const handle_toggle_content = link => {

        set_current_content(link)
        dispatch(submit_form({ user_id: user_id, search_string: "" }, "search_user"))

    }

    return (

        <div className={classes.container}>

            <TopBar
                handle_search_input={() => console.log("a")}
                rendered_on_friends_page
                handle_toggle={(link) => handle_toggle_content(link)}
                no_search
                current_content={current_content}
            />

            {current_content === "Friends" ?

                friends.length ?

                    <Masonry

                        breakpointCols={handle_column_assignment(friends)}
                        className={classes.my_masonry_grid}
                        columnClassName={classes.my_masonry_grid_column}
                        style={{ paddingBottom: "0px" }}>

                        {

                            friends.map(user =>

                                <User

                                    details={user}
                                    key={user._id}
                                    onClick={(details) => console.log(details)}
                                    marginTop={user.pending || user.request ? "35px" : undefined}
                                    request_pending={user.pending ? "Pending" : user.request && "Request"}
                                    populated

                                />)

                        }

                    </Masonry>

                    : <NoFriendsPrompt /> : undefined
            }

            {
                current_content === "Add New Friend" &&

                <AddFriend handle_toggle={() => set_current_content("Friends")} />

            }

            <Nav />

        </div>

    )

}

export default Friends