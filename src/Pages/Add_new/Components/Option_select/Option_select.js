import React from 'react'

//css
import classes from "./Option_select.module.css"

//assets
import Notes from "../../../../Assets/Icon/VIEW NOTES.svg"
import Note from "../../../../Assets/Icon/note.svg"
import colours from '../../../../util/colours'

export const Option_select = props => {

    return (

        <div className={classes.container}>

            <div

                test_handle="add_new_note_button"
                className={[classes.option_container, classes.note].join(" ")}
                onClick={props.handle_selection.bind(this, "note")}

            >

                <img src={Note} alt="A note icon" className={classes.icon} />

                <span className={classes.text} style={{ color: colours.secondary }}>Add a new note <br />( Single )</span>

            </div>

            <div

                test_handle="add_new_collection_button"
                className={[classes.option_container, classes.collection].join(" ")}
                onClick={props.handle_selection.bind(this, "collection")}

            >

                <img src={Notes} alt="A collection icon" className={classes.icon} />

                <span className={classes.text} style={{ color: colours.secondary }}>Add a new collection <br />( Of notes )</span>

            </div>

        </div>

    )

}

export default Option_select
