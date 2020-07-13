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
import CollectionNotes from "./Components/Collection_notes/Collection_notes"

//redux hooks
import { useSelector, useDispatch } from "react-redux"

//redux action creators
import { submit_form, clear_response } from "../../Store/Actions/0_submit_form_action"
import { expand_note, expand_selected_note, collapse_note, enable_edit_mode, disable_edit_mode, set_duplicate_title, clear_duplicate_title } from "../../Store/Actions/1_note_action"

//functions
import handle_cancel_click from "./Functions/handle_cancel_click"
import handle_save_click from "./Functions/handle_save_click"
import handle_delete_click from "./Functions/handle_delete_click"
import handle_collapse from "./Functions/handle_collapse"
import handle_tag_change from "./Functions/handle_tag_change"
import fetch_note_id from "./Functions/fetch_note_id"

//util
import colours from '../../util/colours'

//external
import alert from "easyalert"

export const Note = props => {

    //?selectors
    const response = useSelector(state => state.form.response)//grab the response from the api
    const expanded_notes = useSelector(state => state.note.expanded_notes)//grab the array of expanded notes from the reducer
    const expanded_selected_notes = useSelector(state => state.note.expanded_selected_notes)//grab the array of expanded notes from the reducer
    //selectors
    const expanded_nested_notes = useSelector(state => state.note.expanded_nested_notes)//grab the array of expanded notes from the reducer
    const edit_mode_enabled_notes = useSelector(state => state.note.edit_mode_notes)//grab the array of expanded notes from the reducer
    const duplicate_titles = useSelector(state => state.note.duplicate_titles)//grab any duplicate title attempts from the reducer

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook
    const ref = useRef(null)//hold the reference to the height measurement div, to set the height dynamically (see line 33)
    const is_a_collection = props.details.notes ? true : false//if its a has a notes property, its a collection, if not its

    const edit_mode = edit_mode_enabled_notes.find(note => note === fetch_note_id(response, props))//Check if the instance of this note is in the array of edit mode notes


    //determine if the note is expanded
    //expanded notes are set and fetched by redux, there is a seperate array for selected notes and normal notes (so expanding a selected note does not expand the unselected version at the same time)
    const expanded =

        props.inside_collection ?

            expanded_nested_notes.find(note => note.id === props.details._id && note.index === props.index)

            :

            props.selected ?//if its selected (passed in by the note_selection component)

                expanded_selected_notes.find(note => note.id === fetch_note_id(response, props) && note.index === props.index)//check the array of selected notes

                : expanded_notes.find(note => note === fetch_note_id(response, props))//Check the array of normal notes

    const duplicate_title = duplicate_titles.find(title => title === fetch_note_id(response, props))//check if the instance of this note is in the array of duplicates

    //*states
    const [height, set_height] = useState(0)//dynamically set the height of the note to be animated upon expansion to fit content without a predefined height
    const [re_render, set_re_render] = useState(false)//used to re-render the syntax and search tags if the user modifies but doesn't save them
    const [resize_note, set_resize_note] = useState(false)//used to resize the note if content gets added or deleted from it
    const [hover_border, set_hover_border] = useState(false)//used to highlight a note when hovering it

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

    useEffect(() => {//this effect is triggered when they try to change a title to one that is already in use

        if (response && response.data.message === "You already have a note with that title, please choose another") {

            //if the id on the response matches the id on the note, add the note to the array of duplicate titles to be displayed
            if (response.data.id === fetch_note_id(response, props)) { dispatch(set_duplicate_title(fetch_note_id(response, props))) }

            alert("You already have a note with that title, please choose another", "error")
        }
        // eslint-disable-next-line 
    }, [response])

    //this is triggered upon a success response after editing/deleting a note //*success responses
    useEffect(() => {//used to update the note instantly after editing it

        if (!props.from_add_form) {

            if (response && response.data.message === "note updated successfully" && response.data.id === fetch_note_id(response, props)) {//if a success message is detected

                dispatch(submit_form({ user_id: "5eecd941331a770017a74e44" }, "get_all"))//fetch the notes again with the new data

                dispatch(disable_edit_mode(fetch_note_id(response, props)))//remove the note from the array of edit mode enabled notes

            }

            if (response && response.data.message === "note deleted successfully") {

                dispatch(submit_form({ user_id: "5eecd941331a770017a74e44" }, "get_notes"))
                clear_response()//clear the response

            }

        }
        //eslint-disable-next-line
    }, [response])

    return (

        <div className={classes.container} test_handle={props.test_handle || "note_container"}

            style={{

                height: `${height}px`,
                paddingBottom: expanded && "70px",
                backgroundColor: props.selected && colours.secondary,
                border: hover_border && `1px solid ${colours.secondary}`

            }}

        >

            {props.combine || props.selected ? //if the note is being rendered inside the note_selection component

                <div className={classes.selected_clickable_area}//asign a clickable area so it can still be expanded without selecting it

                    test_handle="note_clickable_area"
                    onClick={props.combine ? props.handle_select.bind(this, props.details) : props.handle_remove.bind(this, props.details, props.index)}
                    onMouseEnter={() => window.innerWidth > 1200 && props.combine && set_hover_border(true)}//when hovered, show an orange border
                    onMouseLeave={() => props.combine && set_hover_border(false)}//when un-hovered remove it

                >

                </div> : undefined


            }

            <div className={classes.measuring_wrapper} ref={ref} >

                {props.details &&

                    <div className={classes.collapsed_content}>

                        <Input //title

                            value={overwritten_values.title === null ? props.details.title : overwritten_values.title}
                            edit_mode={edit_mode}
                            type="title"
                            handle_change={(type, e) => set_overwritten_values({ ...overwritten_values, [type]: e.target.value })}
                            color={props.selected ? "White" : is_a_collection ? colours.secondary : colours.primary}
                            id={fetch_note_id(response, props)}
                            duplicate_title={duplicate_title}
                            //remove the title from the array of duplicate titles in the reducer
                            handle_clear_duplicate_title={() => dispatch(clear_duplicate_title(fetch_note_id(response, props)))}

                        />

                        <Input //subject

                            value={overwritten_values.subject === null ? props.details.subject || "No subject" : overwritten_values.subject}
                            edit_mode={edit_mode}
                            style={{ fontSize: "15px" }}
                            type="subject"
                            handle_change={(type, e) => set_overwritten_values({ ...overwritten_values, [type]: e.target.value })}
                            handle_edit_missing_subject={() => set_overwritten_values({ ...overwritten_values, subject: "" })}
                            color={props.selected ? "#ffffff99" : "grey"}

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

                        {props.details.syntax ?

                            <Syntax

                                combine={(props.combine || props.selected) && true}
                                edit_mode={edit_mode}
                                syntax={overwritten_values.syntax || props.details.syntax}
                                handle_syntax_change={(syntax) => set_overwritten_values({ ...overwritten_values, syntax: syntax })}
                                re_render={re_render}
                                reset_re_render={() => set_re_render(false)}


                            />

                            : !props.details.syntax && edit_mode && !is_a_collection ?

                                <Syntax

                                    combine={(props.combine || props.selected) && true}
                                    edit_mode={edit_mode}
                                    syntax={overwritten_values.syntax || ""}
                                    handle_syntax_change={(syntax) => set_overwritten_values({ ...overwritten_values, syntax: syntax })}
                                    re_render={re_render}
                                    reset_re_render={() => set_re_render(false)}
                                    missing


                                />

                                : undefined
                        }

                        {props.details.search_tags ? /* If theres search tags present, show them  */

                            <SearchTags

                                selected={props.selected}
                                search_tags={props.details.search_tags}
                                edit_mode={edit_mode}
                                handle_tag_change={(tags) => handle_tag_change(tags, set_overwritten_values, overwritten_values, set_resize_note)}
                                re_render={re_render}
                                reset_re_render={() => set_re_render(false)}

                            />

                            : !props.details.search_tags && edit_mode ? /* If theres no search tags, but edit mode is active, show the add new tag input  */

                                <SearchTags

                                    selected={props.selected}
                                    search_tags={[]}
                                    edit_mode={true}
                                    handle_tag_change={(tags) => handle_tag_change(tags, set_overwritten_values, overwritten_values, set_resize_note)}
                                    re_render={re_render}
                                    reset_re_render={() => set_re_render(false)}

                                />
                                : is_a_collection ?

                                    <CollectionNotes notes={props.details.notes}/>

                                    : undefined
                        }

                        {props.selected || props.combine ? undefined :

                            <Buttons

                                expanded={expanded}
                                title={props.details.title}
                                reset_expanded={() => dispatch(collapse_note(fetch_note_id(response, props)))}
                                handle_edit_click={() => dispatch(enable_edit_mode(fetch_note_id(response, props)))}
                                edit_mode={edit_mode}
                                handle_cancel_click={() => handle_cancel_click(dispatch, fetch_note_id(response, props), set_overwritten_values, set_re_render)}
                                handle_save_click={() => handle_save_click(dispatch, overwritten_values, props)}
                                handle_delete_click={(title) => handle_delete_click(title, dispatch, props)}

                            />}

                    </div>

                }

                <ToggleIcon

                    expanded={expanded}

                    handle_collapse={() =>

                        props.inside_collection ?

                            props.handle_collapse(props.details, props.index)

                            : handle_collapse(dispatch, props, props.selected, props.index)}

                    handle_expand={() => {

                        props.inside_collection ?

                            props.handle_expand(props.details, props.index)

                            :


                            props.selected ? dispatch(expand_selected_note(fetch_note_id(response, props), props.index))

                                :

                                dispatch(expand_note(fetch_note_id(response, props)))

                    }}

                    selected={props.selected}

                />

            </div>

        </div>

    )

}

export default Note
