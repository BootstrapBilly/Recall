import React, { useEffect, useState } from 'react'

import classes from './Collection_notes.module.css'

//components
import Note from "../../Note"
import BackButton from "../../../../Shared components/Back_arrow/Back_arrow"
import ProgressBar from "./Components/Progress_bar/Progress_bar"

//external
import { withRouter } from "react-router-dom"

//redux hooks
import { useSelector, useDispatch } from "react-redux"

//redux acttion creators
import { submit_form } from "../../../../Store/Actions/0_submit_form_action"

export const Collection_notes = props => {

    //-config
    const collection_id = props.location.state.id
    const dispatch = useDispatch()

    //?selectors
    const response = useSelector(state => state.form.response)
    const user_id = useSelector(state => state.auth.user_id)

    //*states
    const [current_note_in_view_index, set_current_note_in_view_index] = useState(0)
    const [notes_to_display, set_notes_to_display] = useState([])
    const [progress_numbers, set_progress_numbers] = useState([])

    //!effects
    useEffect(() => {

        if (notes_to_display.length) {

            const array = []//define an empty array to set the state to because it cannot be manipulated directly

            notes_to_display.forEach((note, index) => array.push(index + 1))//loop through each nested note, populating the array with the current index

            set_progress_numbers(array)//set the progress number state to the populate array, so it shows how many notes there
        }

    }, [notes_to_display])

    useEffect(() => {

        dispatch(submit_form({ user_id: user_id, collection_id: collection_id }, "get_single_collection"))

    }, [props.location.state.id])

    // //_+functions
    const handle_navigate = (change) => {

        set_current_note_in_view_index(current_note_in_view_index + change)

    }

    useEffect(() => {

        if(response && response.data.message === "note updated successfully") dispatch(submit_form({ user_id: user_id, collection_id: collection_id }, "get_single_collection"))

        if (response && response.data.message === "Collection retrieved successfully") set_notes_to_display(response.data.collection.notes)

    }, [response])


    return (

        <div className={classes.container}>

            <div className={classes.back_button_container}> <BackButton onClick={() => props.history.goBack()} /></div>

            {notes_to_display.length > 0 &&

                <React.Fragment>

                    <ProgressBar numbers={progress_numbers} handle_navigate={change => handle_navigate(change)} current_note_in_view_index={current_note_in_view_index} total_num_notes={notes_to_display.length} />

                    <Note

                        details={notes_to_display[current_note_in_view_index]}
                        inside_collection

                    />

                </React.Fragment>

            }

        </div >

    )

}

export default withRouter(Collection_notes)
