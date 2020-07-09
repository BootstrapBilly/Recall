import React, { useState, useEffect } from 'react'

//css
import classes from './Combine_notes.module.css'

//util
import colours from "../../util/colours"

//components
import Nav from "../../Shared components/Nav/Nav"
import Note from "../../Shared components/Note/Note"
import TopBar from "../../Shared components/Top_bar/Top_bar"
import SearchBox from "../../Shared components/Top_bar/Components/Search_box"

//redux action creators
import { submit_form } from "../../Store/Actions/0_submit_form_action"

//redux hooks
import { useSelector, useDispatch } from "react-redux"

//functions
import filter_notes_by_search from "../../util/filter_notes_by_search"
import handle_column_assignment from "../../util/handle_column_assignment"
import generate_form_labels from "./Functions/generate_form_labels_combine"

//external
import Masonry from 'react-masonry-css'

export const Combine_notes = () => {

    //?selectors
    const response = useSelector(state => state.form.response)//grab the response from the api

    //*states
    const [notes, set_notes] = useState([])//hold the notes to be displayed, all fetched initially, manipulated by searching and the toggle links
    const [current_step, set_current_step] = useState("initial")//determine the current step of the form
    const [search_value, set_search_value] = useState("")//hold the value of the search bar

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook
    const data = generate_form_labels(current_step)//call the function to generate the data based on what the form step is

    //!Effects
    // eslint-disable-next-line
    // useEffect(() => { dispatch(submit_form({ user_id: "5eecd941331a770017a74e44" }, "get_notes")) }, [])//fetch the notes on the first render of the page
    // useEffect(() => { if (response && response.data.notes) { set_notes(response.data.notes) } }, [response])//update the notes if the response changes

    return (

        <div className={classes.container}>

            <TopBar handle_search_input={(string) => filter_notes_by_search(dispatch, string)} no_search />

            <span className={classes.title} style={{ color: current_step === "optionals" || current_step === "syntax" ? "grey" : colours.primary }}>{data[0]}</span>

            <SearchBox

                value={search_value}
                handle_change={e => set_search_value(e.target.value)}
                no_collapse

            />

            {notes &&

                <Masonry

                    breakpointCols={handle_column_assignment(notes)}
                    className={classes.my_masonry_grid}
                    columnClassName={classes.my_masonry_grid_column}>
                    {notes.map((note, index) => <Note key={index} index={index} details={note} />)}

                </Masonry>

            }

            <Nav />

        </div>

    )

}

export default Combine_notes