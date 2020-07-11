import React, { useState, useEffect } from 'react'

//css
import classes from './Note_selection.module.css'

//util
import colours from "../../../../util/colours"

//components
import Note from "../../../../Shared components/Note/Note"
import TopBar from "../../../../Shared components/Top_bar/Top_bar"
import SearchBox from "../../../../Shared components/Top_bar/Components/Search_box"
import NavigationButtons from "../../../../Shared components/Navigation_buttons/Navigation_buttons"

//redux hooks
import { useSelector, useDispatch } from "react-redux"

//functions
import filter_notes_by_search from "../../../../util/filter_notes_by_search"
import handle_column_assignment from "../../../../util/handle_column_assignment"
import generate_form_labels from "./Functions/generate_form_labels_combine"
import handle_dynamic_button_display from "../../../../util/handle_dynamic_button_display"

//external
import Masonry from 'react-masonry-css'

export const Note_selection = props => {

    //?selectors
    const response = useSelector(state => state.form.response)//grab the response from the api

    //*states
    const [notes, set_notes] = useState([])//hold the notes to be displayed, all fetched initially, manipulated by searching and the toggle links
    const [form_step, set_form_step] = useState("note_selection")//determine the current step of the form
    const [search_value, set_search_value] = useState("")//hold the value of the search bar
    const [selected_notes, set_selected_notes] = useState([])//an array to hold all the notes which have been selected
    const [show_form_navigation_buttons, set_show_form_navigation_buttons] = useState(null)

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook
    const data = generate_form_labels(form_step)//call the function to generate the data based on what the form step is

    //!Effects
    //this effect is used to render notes based on the search string
    useEffect(() => {

        if (search_value === "") set_notes([])//if its empty, render nothing

        //otherwise, run the search query on the backend (the response is handled by the next effect)
        if (search_value) filter_notes_by_search(dispatch, search_value)
        // eslint-disable-next-line
    }, [search_value])

    useEffect(() => { if (response && response.data.notes) { set_notes(response.data.notes) } }, [response])//update the notes if the response changes

    //This effect calls the helper function to dynamically set the navigation buttons, based on what the form step is and if the inputs are populated
    //gets called every time the form step changes or the inputs change
    useEffect(() => { handle_dynamic_button_display(null, null, form_step, set_show_form_navigation_buttons, selected_notes) }, [form_step, selected_notes])

    const handle_select_note = note => set_selected_notes(selected_notes => [...selected_notes, note])//add the note to the array of selected notes
    
    const handle_remove_note = (note, array_index) => set_selected_notes(selected_notes => [...selected_notes.filter((selected_note, index) => index !== array_index)])   //remove the given index of the note from the array of selected notes

    const handle_next_click = () => {

        props.handle_next_click(selected_notes)

    }

    return (

        <div className={classes.container}>

            <TopBar no_search />

            <div className={classes.sticky_top_section}>

                <span className={classes.title} style={{ color: form_step === "optionals" || form_step === "syntax" ? "grey" : colours.primary }}>{data[0]}</span>

                <SearchBox

                    value={search_value}
                    handle_change={e => set_search_value(e.target.value)}
                    no_collapse
                    clear_input={() => set_search_value("")}

                />

            </div>

            {selected_notes &&

                <Masonry

                    breakpointCols={handle_column_assignment(selected_notes)}
                    className={classes.my_masonry_grid}
                    columnClassName={classes.my_masonry_grid_column}>
                    {selected_notes.map((note, index) => <Note key={index} index={index} details={note} selected handle_remove={(note, index) => handle_remove_note(note, index)} />)}

                </Masonry>

            }

            {notes &&

                <Masonry

                    breakpointCols={handle_column_assignment(notes)}
                    className={classes.my_masonry_grid}
                    columnClassName={classes.my_masonry_grid_column}>
                    {notes.map((note, index) => <Note key={index} index={index} details={note} combine handle_select={(note) => handle_select_note(note)} />)}

                </Masonry>

            }

            <div className={classes.button_container}>

                <NavigationButtons //show the navigation buttons
                    width="275px"
                    type={show_form_navigation_buttons}
                    on_click={() => handle_next_click()}
                />

            </div>

        </div>

    )

}

export default Note_selection