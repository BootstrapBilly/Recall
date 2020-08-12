import React, { useEffect, useState } from 'react'

//css
import classes from "./View_all.module.css"

//components
import Nav from "../../Shared components/Nav/Nav"
import Note from "../../Shared components/Note/Note"
import TopBar from "../../Shared components/Top_bar/Top_bar"
import SideMenu from "./Components/Side_menu/Side_menu"
import SharingModal from "./Components/Sharing_modal/Sharing_modal"

//redux action creators
import { submit_form } from "../../Store/Actions/0_submit_form_action"

//redux hooks
import { useSelector, useDispatch } from "react-redux"

//functions
import filter_notes_by_search from "../../util/filter_notes_by_search"
import handle_column_assignment from "../../util/handle_column_assignment"

//external
import Masonry from 'react-masonry-css'

export const View_all = props => {

    //?selectors
    const response = useSelector(state => state.form.response)//grab the response from the api
    const user_id = useSelector(state => state.auth.user_id)//grab the user id from the reducer

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook

    //*states
    const [notes, set_notes] = useState([])//hold the notes to be displayed, all fetched initially, manipulated by searching and the toggle links
    const [filter, set_filter] = useState("All")//hold the type of filter to seperate notes and processes (handled by the top bar links)
    const [position_change, set_position_change] = useState(false)
    const [share_mode, set_share_mode] = useState({ active: false, details: null })//used to show the share note modal if the user presses share

    //!Effects
    // eslint-disable-next-line
    useEffect(() => { dispatch(submit_form({ user_id: user_id }, "get_all")) }, [user_id])//fetch the notes on the first render of the page

    useEffect(() => {

        if (response && response.data.notes) {

            switch (filter) {

                case "All": return set_notes(response.data.both)
                case "Notes": return set_notes(response.data.notes)
                case "Collections": return set_notes(response.data.processes)
                default: return set_notes(response.data.both)
            }

        }

    }, [response, filter])//update the notes if the response changes

    useEffect(() => {

        if (position_change) { //position change is sent by the backend if a note or process title changes and it's order in the sorted array changes

            set_position_change(false)

            switch (filter) {

                case "All": return set_notes(response.data.both)
                case "Notes": return set_notes(response.data.notes)
                case "Collections": return set_notes(response.data.processes)
                default: return set_notes(response.data.both)
            }

        }
        // eslint-disable-next-line
    }, [position_change])

    const handle_toggle_click = link => {

        set_filter(link)
        dispatch(submit_form({ user_id: user_id }, "get_all"))

    }

    //!effects
    useEffect(() => {

        if (props.location.state) {

            set_share_mode({ active: true, details: props.location.state.details })
            console.log(props.location.state.details)

        }

    }, [props.location])

    return (

        <div className={classes.container}>

            {share_mode.active ?

                <SharingModal details={share_mode.details} handle_close={() => set_share_mode(false)} />

                :

                <React.Fragment>

                    <TopBar handle_search_input={(string) => filter_notes_by_search(dispatch, string, user_id)} handle_toggle={(link) => handle_toggle_click(link)}
                    />

                    {notes &&

                        <Masonry

                            breakpointCols={handle_column_assignment(notes)}
                            className={classes.my_masonry_grid}
                            columnClassName={classes.my_masonry_grid_column}>
                            {notes.map((note, index) => <Note key={index} filter={filter} index={index} details={note} handle_position_change={() => set_position_change(true)} toggle_share_mode={(details) => set_share_mode({ active: true, details: details })} />)}

                        </Masonry>

                    }

                </React.Fragment>

            }

            <SideMenu />
            <Nav />

        </div>

    )

}

export default View_all