import React, { useRef, useEffect, useState } from 'react'

import classes from './Collection_notes.module.css'

import Note from "../../Note"

import { useSelector } from "react-redux"

export const Collection_notes = props => {

    //?selectors
    const expanded_nested_notes = useSelector(state => state.note.expanded_nested_notes)//grab the array of expanded notes from the reducer
    const edit_mode_enabled_nested_notes = useSelector(state => state.note.edit_mode_nested_notes)

    //=refs
    const ref = useRef(0)

    //*states
    const [height, set_height] = useState(0)

    //!effects
    useEffect(() => {

        //the height and function call has to be done after a timeout because the height of the note is animated and cannot be calculated instantly
        setTimeout(() => {

            if (ref.current) { set_height(ref.current.clientHeight) }

            props.handle_resize()

        }, 301);

        // eslint-disable-next-line
    }, [expanded_nested_notes, edit_mode_enabled_nested_notes])

    const handle_position_change = () => {

        props.handle_position_change()

    }

    return (

        <div className={classes.container} style={{ height: `${height}px` }}>

            <div className={classes.measuring_wrapper} ref={ref}>

                {props.notes.map((note, index) =>

                    <Note

                        key={index}
                        index={index}
                        details={note}
                        inside_collection
                        handle_position_change={() => handle_position_change()}

                    />)}

            </div>

        </div>

    )

}

export default Collection_notes
