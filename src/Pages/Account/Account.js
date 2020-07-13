import React, { useState, useEffect } from 'react'

//css
import classes from "./Account.module.css"

//components
import Nav from "../../Shared components/Nav/Nav"
import CollectionNotes from "../../Shared components/Note/Components/Collection_notes/Collection_notes"

import { useSelector, useDispatch } from "react-redux"

//redux action creators
import { submit_form } from "../../Store/Actions/0_submit_form_action"

export const Account = () => {

    const dispatch = useDispatch()
    
    //?selectors
    const response = useSelector(state => state.form.response)//grab the response from the api
    const expando = useSelector(state => state.note.expanded_nested_notes)

    // console.log(expando)

    const [notes, set_notes] = useState([])//hold the notes to be displayed, all fetched initially, manipulated by searching and the toggle links

    useEffect(() => { dispatch(submit_form({ user_id: "5eecd941331a770017a74e44" }, "get_all")) }, [])//fetch the notes on the first render of the page

    useEffect(() => {

        if (response && response.data.notes) {

            return set_notes(response.data.both)

        }
    }, [response])//update the notes if the response changes


    return (

        <div className={classes.container}>

            {notes.length && <CollectionNotes notes={notes[0].notes} handle_height_change={()=> console.log("")}/>}

            <Nav />
        </div>

    )

}

export default Account