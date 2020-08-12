import React, { useRef, useEffect, useState } from 'react'

import classes from './Collection_notes.module.css'

import { useSelector } from "react-redux"

//components
import Note from "../../Note"
import BackButton from "../../../../Shared components/Back_arrow/Back_arrow"
import ProgressBar from "./Components/Progress_bar/Progress_bar"

//external
import {withRouter} from "react-router-dom"
import colours from '../../../../util/colours'

export const Collection_notes = props => {

    //*states
    const [current_note_in_view_index, set_current_note_in_view_index] = useState(0)
    const [current_note_in_view_details, set_current_note_in_view_details] = useState(props.location.state.notes[current_note_in_view_index])
    const [progress_numbers, set_progress_numbers] = useState([])

    //!effects
    useEffect(() => {

        const array = []//define an empty array to set the state to because it cannot be manipulated directly

        props.location.state.notes.forEach((note, index) => array.push(index + 1))//loop through each nested note, populating the array with the current index

        set_progress_numbers(array)//set the progress number state to the populate array, so it shows how many notes there

    }, [props.location.state.notes])

    //_+functions
    const handle_navigate = (change) => {

        set_current_note_in_view_index(current_note_in_view_index + change)
        set_current_note_in_view_details(props.location.state.notes[current_note_in_view_index + change])

    }

    return (

        <div className={classes.container}>

            <div className={classes.back_button_container}> <BackButton onClick={()=> props.history.goBack()}/></div>

            <ProgressBar numbers={progress_numbers} handle_navigate={change => handle_navigate(change)} current_note_in_view_index={current_note_in_view_index} total_num_notes={props.location.state.notes.length}/>

            {/* <div className={classes.indicator_container}>

                <span className={classes.current_note} style={{color:colours.secondary}}>Current note :</span>

                <div className={classes.number_container}>

                    <img src={arrow} alt="View previous note" className={classes.arrow_left} style={{ display: current_note_in_view_index < 1 ? "none" : "flex" }} onClick={() => handle_navigate(-1)} />

                    {progress_numbers.map((number, index) => <span className={classes.indicator} key={index} style={{ opacity: current_note_in_view_index !== index && "0.3" }}>{number}</span>)}

                    <img src={arrow} alt="View next note" className={classes.arrow_right} onClick={() => handle_navigate(1)} style={{ display: current_note_in_view_index === props.location.state.notes.length - 1 && "none" }} />

                </div>

            </div> */}

            <Note

                details={current_note_in_view_details}
                inside_collection

            />

        </div>

    )

}

export default withRouter(Collection_notes)
