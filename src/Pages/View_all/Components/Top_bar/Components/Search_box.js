import React from 'react'

//css
import classes from './Search_box.module.css'

//assets
import search from "../../../../../Assets/Icon/SEARCH-BLUE.svg"

export const Search_box = props => {

    return (

        <div className={[classes.container, props.expanded && classes.container_expanded].join(" ")}>

            {props.expanded && //if the search bar is expanded, display the input

                <input className={classes.input} placeholder="Search" value={props.value} onChange={props.handle_change} />

            }

            <img

                src={search}
                className={[classes.search_icon, props.expanded && classes.search_icon_expanded].join(" ")}
                alt="A search icon"
                onClick={props.handle_toggle}
                
            />

        </div>

    )

}

export default Search_box