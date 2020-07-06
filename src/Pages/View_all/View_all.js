import React, { useEffect, useState } from 'react'

//css
import classes from "./View_all.module.css"

//components
import Nav from "../../Shared components/Nav/Nav"
import Note from "../../Shared components/Note/Note"

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


    return (

            <div className={classes.container}>

                {notes && notes.map((note, index) => <Note key={index} index={index} details={note} />)}

                <Nav />

            </div>

    )

}

export default View_all