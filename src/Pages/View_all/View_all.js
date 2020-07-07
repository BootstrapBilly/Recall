import React, { useEffect, useState } from 'react'

//css
import classes from "./View_all.module.css"

//components
import Nav from "../../Shared components/Nav/Nav"
import Note from "../../Shared components/Note/Note"
import TopBar from "./Components/Top_bar/Top_bar"

//redux action creators
import { submit_form } from "../../Store/Actions/0_submit_form_action"

//redux hooks
import { useSelector, useDispatch } from "react-redux"

//functions
import filter_notes_by_search from "./Functions/filter_notes_by_search"

//external
import Masonry from 'react-masonry-css'

export const View_all = () => {

    //?selectors
    const response = useSelector(state => state.form.response)//grab the response from the api

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook

    //*states
    const [notes, set_notes] = useState([])//hold the notes to be displayed, all fetched initially, manipulated by searching and the toggle links

    //!Effects
    useEffect(() => { dispatch(submit_form({ user_id: "5eecd941331a770017a74e44" }, "get_notes")) }, [])//fetch the notes on the first render of the page
    useEffect(() => { if (response && response.data.notes) { set_notes(response.data.notes) } }, [response])//update the notes if the response changes

    // var items = [
    //     { id: 1, name: 'My First Item' },
    //     { id: 2, name: 'Another item' },
    //     { id: 3, name: 'Third Item' },
    //     { id: 4, name: 'Here is the Fourth' },
    //     { id: 5, name: 'High Five' }
    // ];

    // // Convert array to JSX items
    // items = items.map(function (item) {
    //     return <div key={item.id}>{item.name}</div>
    // });


    return (

        <div className={classes.container}>

            <TopBar handle_search_input={(string) => filter_notes_by_search(dispatch, string)} />

            {notes &&


                <Masonry
                    breakpointCols={3}
                    className={classes.my_masonry_grid}
                    columnClassName={classes.my_masonry_grid_column}>
                    {notes.map((note, index) => <Note key={index} index={index} details={note} />)}
                </Masonry>
            }

            {/* <div className={classes.note_container}>

                {notes && notes.map((note, index) => <Note key={index} index={index} details={note} />)}

            </div> */}

            <Nav />

        </div>

    )

}

export default View_all