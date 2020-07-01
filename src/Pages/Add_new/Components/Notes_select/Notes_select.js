import React, { useState, useEffect } from 'react'

//css
import classes from "./Notes_select.module.css"

//components
import NoteThumbnail from "./Components/Note_thumbnail"

//redux hooks
import { useDispatch, useSelector } from "react-redux"

//redux action creators
import { submit_form } from "../../../../Store/Actions/0_submit_form_action"

//util
import colours from '../../../../util/colours'

export const Notes_select = props => {

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook

    //?selectors
    const response = useSelector(state => state.form.response)//grab the returned notes generated by the search string

    //states
    const [note_thumbnails, set_note_thumbnails] = useState([])//state to hold the thumbnails extracted from the response

    //!effects

    //this effect submits the search string (supplied by add_new) to the backend to return any notes which match
    useEffect(() => {

        //submit it to the backend and run a search query on the given string
        dispatch(submit_form({ search_string: props.search_string, user_id: "5eecd941331a770017a74e44" }, "search"))
        
// eslint-disable-next-line
    }, [props.search_string])

    //This effect listens for the response generated by the previous effect, then extracts the title and id from any returned notes and sets the thumbnails
    useEffect(() => {

        if (response && response.data.notes && response.data.notes.length) {//if more than 0 notes have been found

            const extracted_note_details = []//define an array to the titles and id's of the returned notes

            //then populate it with the title and id of each note in the response
            response.data.notes.forEach(note => extracted_note_details.push({ title: note.title, _id: note._id }))

            set_note_thumbnails(extracted_note_details)//then set the not thumbnails state to display the notes for selection
        }

        //if theres a response, but no notes, clear the thumnails array so they are not displayed
        else if (response && !response.data.notes) set_note_thumbnails([])

    }, [response])


    return (

        <div className={classes.container}>

            {note_thumbnails.length > 4 && <span className={classes.scroll_prompt} style={{ color: colours.secondary }}>Tip : You can scroll through your notes</span>}



                <div className={classes.thumbnail_wrapper} style={{ padding: !props.search_string && "0px" }}>

                    {[note_thumbnails.map(note => <NoteThumbnail title={note.title} handle_select={props.handle_select_note.bind(this, note)} background={colours.secondary} />)]}

                </div>



            {props.selected_notes.length ?

                <div className={classes.selected_notes_container}>

                    <span style={{ color: colours.primary }} className={classes.selected_notes_title}>{`You have ${props.selected_notes.length} ${props.selected_notes.length > 1 ? "notes" : "note"} selected`} </span>

                    {props.selected_notes.map(note => <NoteThumbnail title={note.title} handle_select={props.handle_remove_note.bind(this, note)} background={colours.primary} />)}

                </div>

                : null}

        </div>

    )

}

export default Notes_select
