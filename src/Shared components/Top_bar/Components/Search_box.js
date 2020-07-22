import React, { useState } from 'react'

//css
import classes from './Search_box.module.css'

//assets
import search from "../../../Assets/Icon/SEARCH-BLUE.svg"

//util
import colours from '../../../util/colours'

export const Search_box = props => {

    //*states
    const [input_focused, set_input_focused] = useState(false)

    const handle_input_blur = () => {

        if(props.no_collapse) return

        set_input_focused(false)
        !props.no_collapse && props.handle_toggle()
        props.clear_input()

    }

    //=Components
    const input =

        <input

            test_handle="search_input"
            autoFocus={props.no_collapse ? false : true}
            className={classes.input}
            placeholder="Search"
            value={props.value}
            onChange={props.handle_change}
            onFocus={() => set_input_focused(true)}
            onBlur={() => handle_input_blur()}
            style={{ borderColor: input_focused && colours.primary }}

        />

    return (

        <div className={[classes.container, props.expanded ? classes.container_expanded : props.no_collapse && classes.container_no_collapse].join(" ")}
        style={{marginTop:props.no_collapse && "10px"}}>

            {props.expanded ?  //if the search bar is expanded, display the input

                input : props.no_collapse && input//otherwise, if its not collapsible, display it

            }

            <img

                test_handle="search_bar_icon"
                src={search}
                className={[classes.search_icon, props.expanded ? classes.search_icon_expanded : props.no_collapse && classes.search_icon_no_collapse].join(" ")}
                alt="A search icon"
                onClick={props.no_collapse ? undefined : props.handle_toggle}

            />

        </div>

    )

}

export default Search_box