import React, { useState, useEffect } from 'react'

import classes from './Rearrangement_grid.module.css'

//components
import Square from "./Components/Square/Square"
import IconsBar from "./Components/Icons_bar/Icons_bar"

//redux hooks
import { useSelector, useDispatch } from "react-redux"

//redux action creators
import { clear_currently_being_dragged } from "../../../../../../Store/Actions/5_drag_and_drop_action"

export const Rearrangement_grid = props => {

    //-config
    const dispatch = useDispatch()

    //?selectors
    const being_dragged = useSelector(state => state.drag_and_drop.being_dragged)

    const spaced_array = []

    //*states
    const [notes_to_display, set_notes_to_display] = useState([])

    props.notes.forEach((note, index) => {

        if (index === 0) spaced_array.push(index)
        spaced_array.push(note)

        if (index === props.notes.length - 1)
            spaced_array.push(index)
    })

    const handle_drop = (dragged_to_index) => {

        const note = being_dragged.note.note
        const dragged_from = being_dragged.note.index
        const dragged_to = dragged_to_index

        const original_notes = props.notes

        original_notes.splice(dragged_from, 1)//remove the note from the array

        original_notes.splice(dragged_to, 0, note)//re-insert it into the new position 

        dispatch(clear_currently_being_dragged())

    }

    useEffect(() => {

        if (props.notes) set_notes_to_display(props.notes)

    }, [props.notes])

    return (

        <div className={classes.container}>

            <div className={classes.grid_container}>

                <span className={classes.title}>Drag a note on to where you want to move it</span>

                <div className={classes.notes_container}>

                    {
                        notes_to_display.map((note, index) => <Square key={index} position={index} note={note.title ? note : undefined} index={index} handle_drop={(note, position) => { handle_drop(note, position) }} />)
                    }

                </div>

                <IconsBar handle_save={props.handle_save.bind(this, notes_to_display)} handle_cancel={props.handle_cancel} />

            </div>

        </div>

    )

}

export default Rearrangement_grid