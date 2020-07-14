import React, { useRef, useEffect, useState } from 'react'

import classes from './Collection_notes.module.css'

import Note from "../../Note"

//redux action creators
import { expand_nested_note, collapse_nested_note } from "../../../../Store/Actions/1_note_action"

//redux hooks
import { useDispatch, useSelector } from "react-redux"

export const Collection_notes = props => {


    const expanded_nested_notes = useSelector(state => state.note.expanded_nested_notes)//grab the array of expanded notes from the reducer

    const ref = useRef(0)

    const [height, set_height] = useState(0)

    const dispatch = useDispatch()

    useEffect(() => {

        setTimeout(() => {
            set_height(ref.current.clientHeight)
            props.handle_resize()
        }, 301);

    },[expanded_nested_notes])

    const handle_expand = (id, index) => {

        dispatch(expand_nested_note(id, index))

    }

    const handle_collapse = (id, index) => {

        dispatch(collapse_nested_note(id, index))

    }


    return (

        <div className={classes.container} style={{ height: `${height}px` }}>

            <div className={classes.measuring_wrapper} ref={ref}>

                {props.notes.map((note, index) =>

                    <Note

                        key={index}
                        index={index}
                        details={note}
                        handle_expand={() => handle_expand(note._id, index)}
                        handle_collapse={() => handle_collapse(note._id, index)}
                        inside_collection

                    />)}

            </div>

        </div>

    )

}

export default Collection_notes
