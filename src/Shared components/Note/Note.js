import React, { useState, useRef, useEffect } from 'react'

//css
import classes from "./Note.module.css"

//util
import colours from '../../util/colours'

//components
import Buttons from "../Note/Components/Buttons/Buttons"
import Body from "../Note/Components/Body/Body"
import ToggleIcon from "../Note/Components/Toggle_icon/Toggle_icon"
import SearchTags from "./Components/Search_tags/Search_tags"
import Input from "./Components/Input/Input"

//redux hooks
import { useSelector, useDispatch } from "react-redux"

//redux action creators
import { submit_form, clear_response } from "../../Store/Actions/0_submit_form_action"
import { expand_note, collapse_note, enable_edit_mode, disable_edit_mode } from "../../Store/Actions/1_note_action"

export const Note = props => {

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook
    const ref = useRef(null)//hold the reference to the height measurement div, to set the height dynamically (see line 33)

    //?selectors
    const response = useSelector(state => state.form.response)//grab the response from the api
    const expanded_notes = useSelector(state => state.note.expanded_notes)//grab the array of expanded notes from the reducer
    const edit_mode_enabled_notes = useSelector(state => state.note.edit_mode_notes)//grab the array of expanded notes from the reducer

    //*states
    //const [expanded, set_expanded] = useState(expanded_notes.find(note => note === props.details._id))//determine whether the note is expanded or not
    const [height, set_height] = useState(0)//dynamically set the height of the note to be animated upon expansion to fit content without a predefined height
    //const [edit_mode, set_edit_mode] = useState(false)//Determine whether the note is in edit mode or not

    const [form_data, set_form_data] = useState({// a state to hold the note information to be submitted to the backend for editing purposes

        title: null,
        subject: null,
        search_tags: null,//used to make searching easier and faster
        body: null,
        syntax: null,//stores the syntax NOTE ONLY
        notes: []//holds an array of notes collection ONLY

    })

    //_functions
    //this function is triggered by pressing the cancel button during edit mode
    const handle_cancel_click = () => {

        dispatch(disable_edit_mode(props.details._id))

        set_form_data({//set the form data back to the initial values fetched from the database and passed in by the parent component
            title: props.details.title,
            subject: props.details.subject || "No subject",
            search_tags: props.details.search_tags,
            body: props.details.body,
            syntax: props.details.syntax,
            notes: []
        })

    }

    //This function is triggered when the user presses the save button during edit mode
    const handle_save_click = () => {

        return dispatch(submit_form({//the current values of the form are saved into the form_data state, then submited to the backend for processing

            user_id: "5eecd941331a770017a74e44",
            title: props.details.title,
            new_title: form_data.title || props.details.title,
            new_subject: form_data.subject || props.details.subject,
            new_body: form_data.body || props.details.body,
            new_search_tags: form_data.search_tags || props.details.search_tags,
            new_syntax: form_data.syntax || props.details.syntax
        }
            , "update_note"))

    }

    const handle_delete_note = (title) => {

        dispatch(collapse_note(props.details._id))

        dispatch(submit_form({ user_id: "5eecd941331a770017a74e44", title: title }, "delete_note"))

    }

    //!effects
    
    // eslint-disable-next-line 
    //called everytime a note is expanded or collapsed, the height of the div is extracted and set in the height state
    useEffect(() => set_height(ref.current.clientHeight))

    //used to update the note instantly after editing it
    useEffect(() => {

        if (response && response.data.message === "note updated successfully") {//if a success message is detected

            dispatch(submit_form({ user_id: "5eecd941331a770017a74e44" }, "get_notes"))//fetch the notes again with the new data

            dispatch(disable_edit_mode(props.details._id))

        }

    }, [response])


    //This effect listens for a delete response, (generated upon deleting a note)
    useEffect(() => {

        if (response && response.data.message === "note deleted successfully") {

            clear_response()//clear the response

            // Alert("Note deleted successfully", "success", { top: "80px" })//show the user an alert that their note was added successfully

            dispatch(submit_form({ user_id: "5eecd941331a770017a74e44" }, "get_notes"))

        }
        // eslint-disable-next-line
    }, [response])

    return (

        <div className={classes.container} test_handle="note_container"

            style={{ height: `${height}px`, paddingBottom: expanded_notes.find(note => note === props.details._id) && "70px" }}
        >

            <div className={classes.measuring_wrapper} ref={ref} >

                <div className={classes.collapsed_content}>

                    <Input

                        value={form_data.title === null ? props.details.title : form_data.title}
                        edit_mode={edit_mode_enabled_notes.find(note => note === props.details._id)}
                        type="title"
                        handle_change={(type, e) => set_form_data({ ...form_data, [type]: e.target.value })}

                    />

                    <Input

                        value={form_data.subject === null ? props.details.subject || "No subject" : form_data.subject}
                        edit_mode={edit_mode_enabled_notes.find(note => note === props.details._id)}
                        style={{ fontSize: "15px", color: "grey" }}
                        type="subject"
                        handle_change={(type, e) => set_form_data({ ...form_data, [type]: e.target.value })}
                        handle_edit_missing_subject={() => set_form_data({ ...form_data, subject: "" })}

                    />

                </div>

                {expanded_notes.find(note => note === props.details._id) &&

                    <div className={classes.expanded_content}>

                        <Body

                            value={form_data.body === null ? props.details.body : form_data.body}
                            edit_mode={edit_mode_enabled_notes.find(note => note === props.details._id)}
                            handle_change={(type, e) => set_form_data({ ...form_data, [type]: e.target.value })}

                        />

                        {/* If theres syntax present, show a copy code button  */}
                        {props.details.syntax && <div className={classes.copy_button} style={{ background: colours.green }}>COPY CODE</div>}

                        {/* If theres search tags present, show them  */}
                        {props.details.search_tags && <SearchTags search_tags={props.details.search_tags} edit_mode={edit_mode_enabled_notes.find(note => note === props.details._id)} />}

                        <Buttons

                            expanded={expanded_notes.find(note => note === props.details._id)}
                            title={props.details.title}
                            reset_expanded={() => dispatch(collapse_note(props.details._id))}
                            handle_edit_click={() => dispatch(enable_edit_mode(props.details._id))}
                            edit_mode={edit_mode_enabled_notes.find(note => note === props.details._id)}
                            handle_cancel_click={() => handle_cancel_click()}
                            handle_save_click={() => handle_save_click()}
                            handle_delete_click={(title) => handle_delete_note(title)}

                        />

                    </div>

                }

                <ToggleIcon expanded={expanded_notes.find(note => note === props.details._id)} handle_collapse={() => { dispatch(collapse_note(props.details._id)) }} handle_expand={() => dispatch(expand_note(props.details._id))} />

            </div>

        </div>


    )

}

export default Note
