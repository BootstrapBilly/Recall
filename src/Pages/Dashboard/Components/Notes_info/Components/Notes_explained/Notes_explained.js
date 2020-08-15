import React from 'react'

import classes from './Notes_explained.module.css'

//components
import Note from "../../../../../../Shared components/Note/Note"

//Assets
import pointer_line from "../../../../../../Assets/Icon/pointer_line.svg"

export const Whats = () => {

    const details = {

        title: "JavaScript For Each Loop",
        subject: "JavaScript array methods",
        search_tags: ["Javascript", "loops"],
        body: "A forEach loop iterates through an array, calling the specified logic on each element.",
        syntax: '["1", "2", "3"].forEach(element => console.log(element)).',
        notes: null,
        _id: "hardcoded"

    }

    return (

        <div className={classes.container}>

            <span>A note is a way to save your code snippets for future reference.</span>

            <div className={classes.note_container}>

                <Note details={details} example explanation />

                {/* Title */}

                <div className={[classes.description, classes.title].join(" ")}>

                    <span className={classes.description_title}>Title </span>- The name of the note

                    <img src={pointer_line} alt="Line pointing to explanation reference" className={[classes.title_line, classes.line].join(" ")} />

                </div>

                {/* Subject */}

                <div className={[classes.description, classes.subject].join(" ")}>

                    <span className={classes.description_title}>Subject (optional) </span>- What category it falls under

                    <img src={pointer_line} alt="Line pointing to explanation reference" className={[classes.subject_line, classes.line].join(" ")} />

                </div>

                {/* Body */}

                <div className={[classes.description, classes.body].join(" ")}>

                    <span className={classes.description_title}>Body </span>- Description of the note

                    <img src={pointer_line} alt="Line pointing to explanation reference" className={[classes.body_line, classes.line].join(" ")} />

                </div>

                {/* tags */}

                <div className={[classes.description, classes.tags].join(" ")}>

                    <span className={classes.description_title}>Search tags (optional) </span>- To make the note easier to find when searching

                    <img src={pointer_line} alt="Line pointing to explanation reference" className={[classes.tags_line, classes.line].join(" ")} />

                </div>

                {/* Delete */}

                <div className={[classes.description, classes.delete].join(" ")}>

                    <span className={classes.description_title}>Delete </span>- To delete the note

                    <img src={pointer_line} alt="Line pointing to explanation reference" className={[classes.delete_line, classes.line].join(" ")} />

                </div>

                {/* Share */}

                <div className={[classes.description, classes.share].join(" ")}>

                    <span className={classes.description_title}>Share </span>- To share the note with your friends

                    <img src={pointer_line} alt="Line pointing to explanation reference" className={[classes.share_line, classes.line].join(" ")} />

                </div>

                {/* Code */}

                <div className={[classes.description, classes.code].join(" ")}>

                    <span className={classes.description_title}>Copy code </span>- To copy the code related to this note

                    <img src={pointer_line} alt="Line pointing to explanation reference" className={[classes.code_line, classes.line].join(" ")} />

                </div>

                {/* edit */}

                <div className={[classes.description, classes.edit].join(" ")}>

                    <span className={classes.description_title}>Edit </span>- To modify the title, suject, body, search tags and code of this note

                    <img src={pointer_line} alt="Line pointing to explanation reference" className={[classes.edit_line, classes.line].join(" ")} />

                </div>

            </div>

        </div>

    )

}

export default Whats