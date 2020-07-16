import React, { useRef, useEffect, useState } from 'react'

import classes from './Collection_notes.module.css'

import Note from "../../Note"

import { useSelector } from "react-redux"

export const Collection_notes = props => {

    //?selectors
    const expanded_nested_notes = useSelector(state => state.note.expanded_nested_notes)//grab the array of expanded notes from the reducer

    //=refs
    const ref = useRef(0)

    //*states
    const [height, set_height] = useState(0)

    //!effects
    useEffect(() => {

        setTimeout(() => {

            set_height(ref.current.clientHeight)//the height and function call has to be done after a timeout because the height of the note is animated and cannot be calculated instantly
            props.handle_resize()

        }, 301);

        // eslint-disable-next-line
    }, [expanded_nested_notes])

    return (

        <div className={classes.container} style={{ height: `${height}px` }}>

            <div className={classes.measuring_wrapper} ref={ref}>

                {props.notes.map((note, index) =>

                    <Note

                        key={index}
                        index={index}
                        details={note}
                        inside_collection

                    />)}

            </div>

        </div>

    )

}

export default Collection_notes
