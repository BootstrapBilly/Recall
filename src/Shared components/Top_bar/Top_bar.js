import React, { useState, useEffect } from 'react'

//css
import classes from "./Top_bar.module.css"

//util
import colours from '../../util/colours'

//assets
import logo from "../../Assets/Icon/logo.svg"

//components
import SearchBox from "./Components/Search_box"

export const Top_bar = props => {

    //*states
    const [active_toggle_link, set_active_toggle_link] = useState(props.rendered_on_friends_page ? "Friends" : "All")//Store the currently active toggle filter/link
    const [search_expanded, set_search_expanded] = useState(false)//Determine whether the search box is expando
    const [search_value, set_search_value] = useState("")//Hold the value of the search input when it is expanded

    //!Effects
    // eslint-disable-next-line
    useEffect(() => { !props.no_search && props.handle_search_input(search_value) }, [search_value])//when the search value changes, call the parent function to re-render the page

    const handle_toggle_filter = link => {

        set_active_toggle_link(link)

        props.handle_toggle(link)
    }

    let bar_links;

    props.rendered_on_friends_page ?

        bar_links = ["Friends", "Add New Friend"] :

        bar_links = ["All", "Notes", "Collections"]

        useEffect(()=> {

            if(props.current_content) set_active_toggle_link(props.current_content)
            
        },[props.current_content])

    return (

        <div className={classes.container} style={{ background: colours.white }}>

            <img src={logo} className={classes.logo} alt="The recall logo" />

            <div

                className={classes.toggle_link_container}
                style={{ color: colours.primary, visibility: search_expanded && window.innerWidth < 500 && "hidden" }}

            >

                {bar_links.map(link =>

                    <span

                        test_handle={link}
                        className={classes.toggle_link}
                        style={{ color: `${active_toggle_link === link ? colours.primary : `${colours.primary}80`}` }}
                        onClick={() => handle_toggle_filter(link)}
                        key={link}

                    >

                        {link}

                    </span>)}

            </div>

            {props.no_search ? undefined :

                <SearchBox

                    handle_toggle={() => set_search_expanded(!search_expanded)}
                    expanded={props.no_collapse ? false : search_expanded}
                    value={search_value}
                    handle_change={e => set_search_value(e.target.value)}
                    no_collapse={props.no_collapse}
                    clear_input={() => set_search_value("")}

                />}

        </div>

    )

}

export default Top_bar
