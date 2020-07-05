import React, { useEffect, useState } from 'react'

//css
import classes from "./Search_tags.module.css"

//components
import Tag from "./Components/Tag"

//redux hooks
import { useSelector } from "react-redux"

export const Search_tags = props => {

    //?selectors
    const edit_mode_enabled_notes = useSelector(state => state.note.edit_mode_notes)//grab the array of expanded notes from the reducer

    //*states
    const [search_tags, set_search_tags] = useState(props.search_tags.filter(tag => tag !== ""))//a state to hold the search tags passed in by props, also removes any empty string search tags because they are seperated by spaces when entering them

    //!effects
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

    const handle_tag_insertion = new_tag => {

        console.log(props.id)
        
        if (edit_mode_enabled_notes.find(note => note === props.id)) {

            set_search_tags(search_tags => [new_tag, ...search_tags])

            props.handle_tag_insertion(new_tag)

        }
    }

    return (

        <div className={classes.container} style={{ marginBottom: props.edit_mode && "1px" }}>

            {Array.isArray(props.search_tags) ?

                //If search tags is an array

                search_tags//the state of search tags passed in by props (if edit mode is active, it has an extra "Add new tag")

                    .map((tag, index) =>

                        <Tag key={index} text={tag} edit_mode={props.edit_mode} handle_tag_insertion={(new_tag) => handle_tag_insertion(new_tag)} />

                    )

                :

                //if search tags is a string, (will be a string if the note is being displayed instantly after adding it)

                search_tags.split(" ")//split the string into an array

                    .map((tag, index) => //then map it as usual

                        <Tag key={index} text={tag} edit_mode={props.edit_mode} handle_tag_insertion={(new_tag) => handle_tag_insertion(new_tag)} />

                    )}

        </div>

    )

}

export default Search_tags
