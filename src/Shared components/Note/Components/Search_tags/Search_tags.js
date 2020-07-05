import React, { useEffect, useState } from 'react'

//css
import classes from "./Search_tags.module.css"

//components
import Tag from "./Components/Tag"

export const Search_tags = props => {

    const [search_tags, set_search_tags] = useState(props.search_tags.filter(tag => tag !== ""))//a state to hold the search tags passed in by props, also removes any empty string search tags because they are seperated by spaces when entering them

    useEffect(() => {

        if (props.edit_mode) { //if edit mode is active

            if (!search_tags.find(tag => tag === "Add new"))//and there isn't an element called "Add new"
                set_search_tags(search_tags => [...search_tags, "Add new"])//Add it to the array of search tags

        }

        if (!props.edit_mode) {//otherwise if editmode is not active, remove the extra "Add new" tag

            set_search_tags(search_tags => [...search_tags.filter(tag => tag !== "Add new")])
        }

        // eslint-disable-next-line
    }, [props.edit_mode])

    return (

        <div className={classes.container} style={{ marginBottom: props.edit_mode && "1px" }}>

            {Array.isArray(props.search_tags) ?

                //If search tags is an array

                search_tags//the state of search tags passed in by props (if edit mode is active, it has an extra "Add new tag")

                    .map((tag, index) =>

                        <Tag key={index} text={tag} edit_mode={props.edit_mode} />

                    )

                : 

                //if search tags is a string, (will be a string if the note is being displayed instantly after adding it)

                search_tags.split(" ")//split the string into an array

                    .map((tag, index) => //then map it as usual

                        <Tag key={index} text={tag} edit_mode={props.edit_mode} />

                    )}

        </div>

    )

}

export default Search_tags
