import React, { useEffect, useState } from 'react'

//css
import classes from "./View_all.module.css"

//components
import Nav from "../../Shared components/Nav/Nav"
import Note from "../../Shared components/Note/Note"
import TopBar from "../../Shared components/Top_bar/Top_bar"
import SideMenu from "./Components/Side_menu/Side_menu"

//redux action creators
import { submit_form } from "../../Store/Actions/0_submit_form_action"

//redux hooks
import { useSelector, useDispatch } from "react-redux"

//functions
import filter_notes_by_search from "../../util/filter_notes_by_search"
import handle_column_assignment from "../../util/handle_column_assignment"

//external
import Masonry from 'react-masonry-css'

export const View_all = () => {

    //?selectors
    const response = useSelector(state => state.form.response)//grab the response from the api

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook

    //*states
    const [notes, set_notes] = useState([])//hold the notes to be displayed, all fetched initially, manipulated by searching and the toggle links
    const [filter, set_filter] = useState("All")

    //!Effects
    // eslint-disable-next-line
    useEffect(() => { dispatch(submit_form({ user_id: "5eecd941331a770017a74e44" }, "get_all")) }, [])//fetch the notes on the first render of the page

    useEffect(() => {


        if (response) {

            switch (filter) {

                case "All": return set_notes(response.data.both)
                case "Notes": return set_notes(response.data.notes)
                case "Collections": return set_notes(response.data.processes)
                default: return set_notes(response.data.both)
            }

        }

    }, [response, filter])//update the notes if the response changes

    return (

        <div className={classes.container}>

            <TopBar handle_search_input={(string) => filter_notes_by_search(dispatch, string)} handle_toggle={(link) => set_filter(link)}
            />

            {notes &&

                <Masonry

                    breakpointCols={handle_column_assignment(notes)}
                    className={classes.my_masonry_grid}
                    columnClassName={classes.my_masonry_grid_column}>
                    {notes.map((note, index) => <Note key={index} index={index} details={note}/>)}

                </Masonry>

            }

            <Nav />

            <SideMenu />

        </div>

    )

}

export default View_all