import React, { useEffect, useState } from 'react'

import classes from './Collection_notes.module.css'

//components
import Note from "../../Note"
import BackButton from "../../../../Shared components/Back_arrow/Back_arrow"
import ProgressBar from "./Components/Progress_bar/Progress_bar"
import RearrangementGrid from "./Components/Rearrangement_grid/Rearrangement_grid"

//external
import { withRouter } from "react-router-dom"
import Alert from "easyalert"

//redux hooks
import { useSelector, useDispatch } from "react-redux"

//redux acttion creators
import { submit_form } from "../../../../Store/Actions/0_submit_form_action"
import colours from '../../../../util/colours'

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
    const [rearrange_mode, set_rearrange_mode] = useState(false)

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

        if (response && response.data.message === "note updated successfully") dispatch(submit_form({ user_id: user_id, collection_id: collection_id }, "get_single_collection"))

        if (response && response.data.message === "Collection retrieved successfully") set_notes_to_display(response.data.collection.notes)


    }, [response])

    const handle_cancel = () => {

        dispatch(submit_form({ user_id: user_id, collection_id: collection_id }, "get_single_collection"))
        set_rearrange_mode(false)
    }

    const handle_save = reordered_notes => {
  
        dispatch(submit_form({user_id:user_id, collection_id:collection_id, reordered_notes:reordered_notes}, "reorder_collection_notes"))
        set_rearrange_mode(false)
    }

    return (

        <div className={classes.container}>

            <div className={classes.back_button_container} style={{display: rearrange_mode && "none"}}> <BackButton onClick={() => props.history.goBack()} /></div>

            {notes_to_display.length > 0 && !rearrange_mode &&

                <React.Fragment>

                    <ProgressBar numbers={progress_numbers} handle_navigate={change => handle_navigate(change)} current_note_in_view_index={current_note_in_view_index} total_num_notes={notes_to_display.length} />

                    <Note

                        details={notes_to_display[current_note_in_view_index]}
                        inside_collection

                    />

                    <div className={classes.re_arrange_button} style={{backgroundColor:colours.green}}
                    onClick={()=> set_rearrange_mode(true)}>Change order of notes</div>

                </React.Fragment>

            }

            {notes_to_display.length && rearrange_mode && <RearrangementGrid notes={notes_to_display} handle_save={(reordered_notes)=> handle_save(reordered_notes)} handle_cancel={()=> handle_cancel()} />}

        </div >

    )

}

export default withRouter(Collection_notes)
