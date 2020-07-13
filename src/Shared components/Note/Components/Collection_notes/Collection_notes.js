import React, { useState, useRef, useEffect } from 'react'

import classes from './Collection_notes.module.css'

//components
import Note from "../../Note"

//redux hooks
import { useDispatch } from "react-redux"

//redux action creators
import { expand_nested_note, collapse_nested_note } from "../../../../Store/Actions/1_note_action"

export const Collection_notes = props => {

    const dispatch = useDispatch()

    const ref = useRef(null)

    const [height, set_height] = useState(0)//dynamically set the height of the note to be animated upon expansion to fit content without a predefined height

    useEffect(() => {

        set_height(ref.current.clientHeight)
    })


    const handle_expand_note = (note, index) => {

        dispatch(expand_nested_note(note._id, index))
     
    }

    const handle_collapse_note = (note, index) => {


        console.log(note._id)
        console.log(index)
        
        dispatch(collapse_nested_note(note._id, index))

    }

    return (

        <div className={classes.container} style={{ height: `${height}px`, minHeight: `${props.notes.length * 100}px`}}>

            <div className={classes.measuring_wrapper} ref={ref} >

                {props.notes.map((note, index) => <Note key={index} index={index} details={note} inside_collection handle_expand={(note, index) => handle_expand_note(note, index)} handle_collapse={(note, index) => handle_collapse_note(note, index)} />)}

            </div>

        </div>

    )

}

export default Collection_notes
