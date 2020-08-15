import React, { useState } from 'react'

import classes from './Square.module.css'

//components
import colours from '../../../../../../../../util/colours'
import Note from "../../../../../../Note"

//redux hooks
import { useDispatch } from "react-redux"
import { set_currently_being_dragged, clear_currently_being_dragged } from '../../../../../../../../Store/Actions/5_drag_and_drop_action'

//redux action creators

export const Square = props => {

    //-config
    const dispatch = useDispatch()

    //*states
    const [has_dragover, set_has_dragover] = useState(false)

    return (

        <div

            className={classes.container}
            style={{ backgroundColor: has_dragover && colours.primary }}
            draggable={(props.note && !props.removal_mode) ? "true" : "false"} //only make it draggable if it has a note thumbnail inside
            onClick={props.removal_mode && props.handle_removal.bind(this, props.note)}

            onDragStart={() => {

                dispatch(set_currently_being_dragged({ note: props.note, index: props.index }))

            }}


            onDragEnd={() => dispatch(clear_currently_being_dragged())}

            onDragOver={(event) => {

                event.stopPropagation();
                event.preventDefault();

                if (!has_dragover) { set_has_dragover(true) }

            }}

            onDragLeave={() => set_has_dragover(false)}

            onDrop={() => {

                set_has_dragover(false)

                props.handle_drop(props.index)

            }}

        >

            {props.note && <Note key={props.index} filter={null} index={props.index} details={props.note} re_arrange />}

        </div>

    )

}

export default Square