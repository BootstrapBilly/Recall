import React, {useState} from 'react'

//css
import classes from './Add_friend.module.css'

//util
import colours from '../../../../util/colours'

//components
import SearchBox from "../../../../Shared components/Top_bar/Components/Search_box"

export const Add_friend = () => {

    const [search_value, set_search_value] = useState("")

    return (

        <div className={classes.container}>

            <span className={classes.title} style={{ color: colours.primary }}>Who would you like to add ?</span>

            <SearchBox

                value={search_value}
                handle_change={e => set_search_value(e.target.value)}
                no_collapse
                clear_input={() => set_search_value("")}

            />

        </div>

    )

}

export default Add_friend