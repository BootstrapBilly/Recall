import React, { useRef, useEffect, useState } from 'react'

import classes from './Collection_notes.module.css'

import Note from "../../Note"

import { useSelector } from "react-redux"

export const Collection_notes = props => {

    const expanded_nested_notes = useSelector(state => state.note.expanded_nested_notes)//grab the array of expanded notes from the reducer

    const ref = useRef(0)

    const [height, set_height] = useState(0)


    useEffect(() => {

        setTimeout(() => {
            set_height(ref.current.clientHeight)
            props.handle_resize()
        }, 301);

    },[expanded_nested_notes])

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
