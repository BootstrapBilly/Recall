import React, { useState } from 'react'

//css
import classes from "./Friends.module.css"

//components
import Nav from "../../Shared components/Nav/Nav"
import TopBar from "../../Shared components/Top_bar/Top_bar"
import NoFriendsPrompt from "./Components/No_friends_prompt/No_friends_prompt"
import AddFriend from "./Components/Add_friend/Add_friend"

//util
import colours from '../../util/colours'

//assets
import Man_alone from "../../Assets/Abstract/alone.svg"

export const Friends = () => {

    const [current_content, set_current_content] = useState("Friends")

    return (

        <div className={classes.container}>

            <TopBar
                handle_search_input={() => console.log("a")}
                rendered_on_friends_page
                handle_toggle={(link) => set_current_content(link)}
                no_search
            />

            {current_content === "Friends" && <NoFriendsPrompt />}

            {
                current_content === "Add New Friend" &&

                <AddFriend handle_toggle={()=> set_current_content("Friends")}/>

            }

            <Nav />

        </div>

    )

}

export default Friends