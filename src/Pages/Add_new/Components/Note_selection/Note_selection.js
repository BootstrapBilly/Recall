import React, { useState, useEffect } from 'react'

//css
import classes from './Note_selection.module.css'

//util
import colours from "../../../../util/colours"

//components
import Note from "../../../../Shared components/Note/Note"
import SearchBox from "../../../../Shared components/Top_bar/Components/Search_box"
import NavigationButtons from "../../../../Shared components/Navigation_buttons/Navigation_buttons"

//redux hooks
import { useSelector, useDispatch } from "react-redux"

//functions
import filter_notes_by_search from "../../../../util/filter_notes_by_search"
import handle_column_assignment from "../../../../util/handle_column_assignment"
import generate_form_labels from "./Functions/generate_form_labels_combine"

//external
import Masonry from 'react-masonry-css'

export const Note_selection = props => {

    //?selectors
    const response = useSelector(state => state.form.response)//grab the response from the api
    const user_id = useSelector(state => state.auth.user_id)//grab the user id from the reducer

    //*states
    const [notes, set_notes] = useState([])//hold the notes to be displayed, all fetched initially, manipulated by searching and the toggle links
    const [search_value, set_search_value] = useState("")//hold the value of the search bar
    const [selected_notes, set_selected_notes] = useState(props.selected_notes)//an array to hold all the notes which have been selected (handled by parent)

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook
    const data = generate_form_labels("note_selection")//call the function to generate the data for the note_selection step

    //!Effects
    //this effect is used to render notes based on the search string
    useEffect(() => {

        if (search_value === "") set_notes([])//if its empty, render nothing

        //otherwise, run the search query on the backend (the response is handled by the next effect)
        if (search_value) filter_notes_by_search(dispatch, search_value, user_id)
        // eslint-disable-next-line
    }, [search_value])

    //This is called when the search string, and therefore the response of non-selected notes changes, to render them
    useEffect(() => { if (response && response.data.notes) { set_notes(response.data.notes) } }, [response])

    //This is called when selected notes changes in the parent, it updates the state in here to render them
    useEffect(() => { if (props.selected_notes) set_selected_notes(props.selected_notes) }, [props.selected_notes])

    return (

        <div className={classes.container}>

            <div className={classes.sticky_top_section}>

                <span className={classes.title} style={{ color: colours.primary }}>{data[0]}</span>

                <div className={classes.search_container}>

                    <SearchBox

                        value={search_value}
                        handle_change={e => set_search_value(e.target.value)}
                        no_collapse
                        clear_input={() => set_search_value("")}

                    />

                </div>

            </div>

            {selected_notes && //the selected notes (in blue)

                <Masonry

                    breakpointCols={handle_column_assignment(selected_notes)}
                    className={classes.my_masonry_grid}
                    columnClassName={classes.my_masonry_grid_column}>

                    {

                        selected_notes.map((note, index) =>

                            <Note key={index} index={index} details={note} selected test_handle="selected_note"
                                handle_remove={props.handle_remove_note.bind(this, note, index)}
                            />)

                    }

                </Masonry>

            }

            {notes && //the normal notes(render by the search string change in the search box)

                <Masonry

                    breakpointCols={handle_column_assignment(notes)}
                    className={classes.my_masonry_grid}
                    columnClassName={classes.my_masonry_grid_column}>

                    {
                        notes.map((note, index) =>

                            <Note key={index} index={index} details={note} combine
                                handle_select={props.handle_select_note.bind(this, note)}
                            />)

                    }

                </Masonry>

            }

            <div className={classes.button_container}>

                <NavigationButtons
                    width="275px"
                    type={props.selected_notes.length >= 2 ? "next" : "grey_next"}
                    on_click={props.handle_next_click}
                />

            </div>

        </div>

    )

}

export default Note_selection