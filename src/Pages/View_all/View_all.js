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


export const View_all = () => {

    const dispatch = useDispatch()

    const [notes, set_notes] = useState([])

    const response = useSelector(state => state.form.response)

    useEffect(() => {

        dispatch(submit_form({ user_id: "5eecd941331a770017a74e44" }, "get_notes"))

        // eslint-disable-next-line
    }, [])

    useEffect(() => {

        if (response && response.data.notes) { set_notes(response.data.notes) }

    }, [response])

    const handle_filter_notes = string => {

        if(!string) return dispatch(submit_form({ user_id: "5eecd941331a770017a74e44" }, "get_notes"))

        dispatch(submit_form({ user_id: "5eecd941331a770017a74e44", search_string:string }, "search"))

    }

    return (

        <div className={classes.container}>

            <TopBar handle_search_input={(string)=> handle_filter_notes(string)} />

            <div className={classes.note_container}>

                {notes && notes.map((note, index) => <Note key={index} index={index} details={note} />)}

            </div>

            <Nav />

        </div>

    )

}

export default View_all