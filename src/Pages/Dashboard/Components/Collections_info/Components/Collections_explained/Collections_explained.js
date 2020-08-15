import React from 'react'

import classes from './Collections_explained.module.css'

//util
import colours from '../../../../../../util/colours'

//components
import Note from "../../../../../../Shared components/Note/Note"

//Assets
import pointer_line from "../../../../../../Assets/Icon/pointer_line.svg"

export const Collections_explained = () => {

    const details = {

        title: "Creating an api",
        subject: "Backend",
        search_tags: ["Backend", "API"],
        body: "Step by step process of putting an API together",
        syntax: null,
        notes: [1, 2, 3],
        _id: "hardcoded"

    }


    return (

        <div className={classes.container}>

            <p>A collection is a group of notes which have been bundled together to form a process. </p>

            For example,
            <span style={{ color: colours.secondary }}> <b>creating an api</b></span> may consist of the following notes

            <ul>

                <li>Create a mongooose model</li>
                <li>Setting up routes</li>
                <li>Implementing controllers</li>

            </ul>

            <div className={classes.note_container}>

                <Note details={details} example explanation />

                {/* Title */}

                <div className={classes.description}>

                    <span className={classes.description_title}>Difference </span>- You may have noticed, a collection has an orange title, whereas a note has a blue title

                <img src={pointer_line} alt="Line pointing to explanation reference" className={classes.line} />

                </div>

                {/* View notes */}

                <div className={[classes.description, classes.view_notes].join(" ")}>

                    <span className={classes.description_title}>Viewing the notes inside </span>- When you create your own collection, you will be able to view the notes inside by clicking here

                <img src={pointer_line} alt="Line pointing to explanation reference" className={[classes.line, classes.line_view].join(" ")} />

                </div>

            </div>

        </div>

    )

}

export default Collections_explained
