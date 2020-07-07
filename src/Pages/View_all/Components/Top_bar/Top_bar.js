import React, { useState, useEffect } from 'react'

//css
import classes from "./Top_bar.module.css"

//util
import colours from '../../../../util/colours'

//assets
import logo from "../../../../Assets/Icon/logo.svg"

//components
import SearchBox from "./Components/Search_box"

export const Top_bar = props => {

    //*states
    const [active_toggle_link, set_active_toggle_link] = useState("All")//Store the currently active toggle filter/link
    const [search_expanded, set_search_expanded] = useState(false)//Determine whether the search box is expando
    const [search_value, set_search_value] = useState("")//Hold the value of the search input when it is expanded

    //!Effects
    useEffect(() => { props.handle_search_input(search_value) }, [search_value])//when the search value changes, call the parent function to re-render the notes

    return (

        <div className={classes.container} style={{ background: colours.white }}>

            <img src={logo} className={classes.logo} alt="The recall logo" />

            <div

                className={classes.toggle_link_container}
                style={{ color: colours.secondary, visibility: search_expanded && window.innerWidth < 500 && "hidden" }}

            >

                {["All", "Notes", "Collections"].map(Link =>

                    <span

                        className={classes.toggle_link}
                        style={{ color: `${active_toggle_link === Link ? colours.secondary : `${colours.secondary}BF`}` }}
                        onClick={() => set_active_toggle_link(Link)}

                    >

                        {Link}

                    </span>)}

            </div>

            <SearchBox

                handle_toggle={() => set_search_expanded(!search_expanded)}
                expanded={search_expanded}
                value={search_value}
                handle_change={e => set_search_value(e.target.value)}

            />

        </div>

    )

}

export default Top_bar
