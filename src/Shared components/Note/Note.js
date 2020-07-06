/* The handling of expanding/collapsing and setting/unsetting edit mode is done by redux
The relevant actions are dispatched which updates the array of note_ids in the corresponding reducer
Then the array is listened to by useselector to determine whether the note is expanded and whether edit mode is enabled

This is to allow notes to be mapped from one component, whilst still maintaining their invidivual edit/expanded states */

import React, { useState, useRef, useEffect } from 'react'

//css
import classes from "./Note.module.css"

//components
import Buttons from "../Note/Components/Buttons/Buttons"
import Body from "../Note/Components/Body/Body"
import ToggleIcon from "../Note/Components/Toggle_icon/Toggle_icon"
import SearchTags from "./Components/Search_tags/Search_tags"
import Input from "./Components/Input/Input"
import Syntax from "./Components/Syntax/Syntax"

//redux hooks
import { useSelector, useDispatch } from "react-redux"

//redux action creators
import { submit_form, clear_response } from "../../Store/Actions/0_submit_form_action"
import { expand_note, collapse_note, enable_edit_mode, disable_edit_mode } from "../../Store/Actions/1_note_action"

//functions
import handle_cancel_click from "./Functions/handle_cancel_click"
import handle_save_click from "./Functions/handle_save_click"
import handle_delete_click from "./Functions/handle_delete_click"
import handle_collapse from "./Functions/handle_collapse"
import handle_tag_change from "./Functions/handle_tag_change"

export const Note = props => {

    //?selectors
    const response = useSelector(state => state.form.response)//grab the response from the api
    const expanded_notes = useSelector(state => state.note.expanded_notes)//grab the array of expanded notes from the reducer
    const edit_mode_enabled_notes = useSelector(state => state.note.edit_mode_notes)//grab the array of expanded notes from the reducer

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook
    const ref = useRef(null)//hold the reference to the height measurement div, to set the height dynamically (see line 33)
    const edit_mode = edit_mode_enabled_notes.find(note => note === props.details._id)//Check if the instance of this note is in the array of edit mode notes
    const expanded = expanded_notes.find(note => note === props.details._id)//Check if the instance of this note is in the array of expanded notes

    //*states
    const [height, set_height] = useState(0)//dynamically set the height of the note to be animated upon expansion to fit content without a predefined height
    const [re_render_tags, set_re_render_tags] = useState(false)
    const [resize_note, set_resize_note] = useState(false)

    const [overwritten_values, set_overwritten_values] = useState({// a state to hold the note information to be submitted to the backend for editing purposes

        title: null,
        subject: null,
        search_tags: null,
        body: null,
        syntax: null,
        notes: []

    })

    //!effects

    //called everytime a note is expanded or collapsed, the height of the div is extracted and set in the height state to resize the note
    // eslint-disable-next-line 
    useEffect(() => set_height(ref.current.clientHeight))

    // eslint-disable-next-line 
    useEffect(() => {//this is triggered by the handle_tag_change function which sets the resize state to true

        if (resize_note) {//if the resize state is true
            set_height(ref.current.clientHeight)//resize the note
            set_resize_note(false)//and set the state to false
        }

    }, [resize_note])

    //this is triggered upon a success response after editing a note
    useEffect(() => {//used to update the note instantly after editing it

        if (response && response.data.message === "note updated successfully" && response.data.id === props.details._id) {//if a success message is detected

            dispatch(submit_form({ user_id: "5eecd941331a770017a74e44" }, "get_notes"))//fetch the notes again with the new data

            dispatch(disable_edit_mode(props.details._id))//remove the note from the array of edit mode enabled notes

        }

        if (response && response.data.message === "note deleted successfully") {

            dispatch(submit_form({ user_id: "5eecd941331a770017a74e44" }, "get_notes"))
            clear_response()//clear the response

        }
        //eslint-disable-next-line
    }, [response])

    return (

        <div className={classes.container} test_handle="note_container" style={{ height: `${height}px`, paddingBottom: expanded && "70px" }}>

            <div className={classes.measuring_wrapper} ref={ref} >

                {props.details &&

                    <div className={classes.collapsed_content}>

                        <Input

                            value={overwritten_values.title === null ? props.details.title : overwritten_values.title}
                            edit_mode={edit_mode}
                            type="title"
                            handle_change={(type, e) => set_overwritten_values({ ...overwritten_values, [type]: e.target.value })}

                        />

                        <Input

                            value={overwritten_values.subject === null ? props.details.subject || "No subject" : overwritten_values.subject}
                            edit_mode={edit_mode}
                            style={{ fontSize: "15px", color: "grey" }}
                            type="subject"
                            handle_change={(type, e) => set_overwritten_values({ ...overwritten_values, [type]: e.target.value })}
                            handle_edit_missing_subject={() => set_overwritten_values({ ...overwritten_values, subject: "" })}

                        />

                    </div>}

                {expanded &&

                    <div className={classes.expanded_content}>

                        <Body

                            value={overwritten_values.body === null ? props.details.body : overwritten_values.body}
                            edit_mode={edit_mode}
                            handle_change={(type, e) => set_overwritten_values({ ...overwritten_values, [type]: e.target.value })}

                        />

                        {/* If theres syntax present, show a copy code button  */}
                        {props.details.syntax && <Syntax edit_mode={edit_mode} syntax={props.details.syntax} />}

                        {props.details.search_tags ? /* If theres search tags present, show them  */

                            <SearchTags

                                search_tags={props.details.search_tags}
                                edit_mode={edit_mode}
                                handle_tag_change={(tags) => handle_tag_change(tags, set_overwritten_values, overwritten_values, set_resize_note)}
                                re_render_tags={re_render_tags}
                                reset_re_render={() => set_re_render_tags(false)}

                            />

                            : !props.details.search_tags && edit_mode ? /* If theres no search tags, but edit mode is active, show the add new tag input  */

                                <SearchTags

                                    search_tags={[]}
                                    edit_mode={true}
                                    handle_tag_change={(tags) => handle_tag_change(tags, set_overwritten_values, overwritten_values, set_resize_note)}
                                    re_render_tags={re_render_tags}
                                    reset_re_render={() => set_re_render_tags(false)}

                                />

                                : undefined
                        }

                        <Buttons

                            expanded={expanded}
                            title={props.details.title}
                            reset_expanded={() => dispatch(collapse_note(props.details._id))}
                            handle_edit_click={() => dispatch(enable_edit_mode(props.details._id))}
                            edit_mode={edit_mode}
                            handle_cancel_click={() => handle_cancel_click(dispatch, props.details._id, set_overwritten_values, set_re_render_tags)}
                            handle_save_click={() => handle_save_click(dispatch, overwritten_values, props)}
                            handle_delete_click={(title) => handle_delete_click(title, dispatch, props)}

                        />

                    </div>

                }

                <ToggleIcon

                    expanded={expanded}
                    handle_collapse={() => handle_collapse(dispatch, props)}
                    handle_expand={() => dispatch(expand_note(props.details._id))}

                />

            </div>

        </div>

    )

}

export default Note
