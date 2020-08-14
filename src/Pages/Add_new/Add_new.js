import React, { useState, useEffect } from 'react'

//css
import classes from "./Add_new.module.css"

//components
import NoteSelection from "./Components/Note_selection/Note_selection"
import Nav from "../../Shared components/Nav/Nav"
import Input from "../../Shared components/Input/Input"
import NavigationButtons from "../../Shared components/Navigation_buttons/Navigation_buttons"
import Note from "../../Shared components/Note/Note"
import TopBar from "../../Shared components/Top_bar/Top_bar"

//util
import colours from '../../util/colours'

//external
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom"

//functions
import handle_form_navigation from "../../util/handle_form_navigation"
import handle_dynamic_button_display from '../../util/handle_dynamic_button_display'
import generate_form_labels from "./Functions/generate_form_labels"
import handle_search_tag_input from "./Functions/handle_search_tag_input"
import reset_form from "./Functions/reset_form"

//redux action creators
import { clear_response } from "../../Store/Actions/0_submit_form_action"
import { disable_edit_mode } from "../../Store/Actions/1_note_action"

//assets
import man_pointing from "../../Assets/Graphics/man-pointing.svg"

export const Add_new = props => {

    //-config
    //const from_collection_detail = props.location.state.from_collection_detail//detect if the user has been redirected from the insert note button in  collection

    //?selectors
    const response = useSelector(state => state.form.response)//grab the form submission response from the reducer
    const user_id = useSelector(state => state.auth.user_id)//grab the user id from the reducer

    //*states
    //state to hold the current step of the form, if theyre adding a note it starts on title, if theyre adding a collection, it starts on note_selection
    const [current_step, set_current_step] = useState(props.form_type === "note" ? "title" : "note_selection")
    const [form_navigation_buttons, set_form_navigation_buttons] = useState(false)//show different buttons depending on input/step of the form
    const [note_details, set_note_details] = useState(null)//used to hold the details of the note when added successfully, to render it instantly
    const [redirect, set_redirect] = useState(false)

    const [form_data, set_form_data] = useState({// a state to hold the note information to be submitted to the backend

        title: null,
        subject: null,
        search_tags: null,//used to make searching easier and faster
        body: null,
        syntax: null,//stores the syntax NOTE ONLY
        selected_notes: []//stores the selected notes COLLECTION ONLY
    })

    //-config
    const dispatch = useDispatch()//initialize the usedispatch hook
    const form_information = generate_form_labels(current_step, props.form_type)//generate the form information based on the current step of the form
    const optional_prompt = <div className={classes.prompt_text} style={{ color: colours.primary }}>This step is optional and may be skipped</div>

    //!Effects

    //This effect calls the helper function to dynamically set the navigation buttons, based on what the form step is and if the inputs are populated
    //gets called every time the form step changes or the inputs change
    useEffect(() => {

        handle_dynamic_button_display(props.form_type, form_data, current_step, set_form_navigation_buttons, form_data.selected_notes)

    }, [form_data, current_step, props.form_type, form_data.selected_notes])

    //this effect listens for the check note title, then navigates to the next step upon successful response 
    useEffect(() => {

        /* These responses are generated by the handle_form_navigation helper function*/

        if (response && response.data.message === "Title is okay") {//if the email has been checked and is okay
            set_current_step("body")//move onto the next step
            dispatch(clear_response())//and clear the response
        }

        // eslint-disable-next-line
    }, [response])

    //This effect listens for a successful response, (generated upon submiting the form)
    useEffect(() => {

        if (response && response.data.message === "Note added successfully") {//if a 201 is detected

            set_current_step("success")
            set_note_details({ ...response.data.note, displayed_on_add_new_form: true })

        }

        if (response && response.data.message === "process added successfully") {//if a 201 is detected

            set_current_step("success")
            set_note_details({ ...response.data.process, displayed_on_add_new_form: true })

        }

    }, [response])

    useEffect(() => {

        if (response && response.data.message === "note deleted successfully") { reset_form(set_current_step, set_form_data, set_form_navigation_buttons, form_data) }

        if (response && response.data.message === "process deleted successfully") { reset_form(set_current_step, set_form_data, set_form_navigation_buttons, form_data) }

        if (response && response.data.message === "note updated successfully") {

            set_note_details({ ...response.data.note, title: response.data.title })

            dispatch(disable_edit_mode(response.data.note._id))//remove the note from the array of edit mode enabled notes

        }

        if (response && response.data.message === "process updated successfully") {

            set_note_details({ ...response.data.process, title: response.data.title })

            dispatch(disable_edit_mode(response.data.process._id))//remove the process from the array of edit mode enabled notes

        }
        // eslint-disable-next-line
    }, [response])

    return (

        <React.Fragment>

            <div className={classes.container}>

                <TopBar title={`Add a new ${props.form_type}`} no_search />

                <div className={classes.background_overlay}></div>

                <div className={classes.form_wrapper}>

                    <img src={man_pointing} alt={"a man pointing to the form"} className={classes.man_pointing} style={{ display: current_step === "note_selection" && "none" }} />

                    <span className={classes.title} style={{ color: current_step === "optionals" || current_step === "syntax" ? "grey" : colours.primary, marginTop: current_step === "selection" && "45px", display: current_step === "note_selection" && "none" }}>{form_information[0]}</span>

                    {
                        /* The form renders different things depending on what the step of the form is*/

                        current_step === "note_selection" ?

                            <NoteSelection

                                part_of_add_new_form
                                handle_next_click={() => form_data.selected_notes.length >= 2 && set_current_step("title")}
                                selected_notes={form_data.selected_notes}
                                handle_select_note={(note) => set_form_data({ ...form_data, selected_notes: [...form_data.selected_notes, note] })}

                                handle_remove_note={(note, array_index) =>
                                    set_form_data({
                                        ...form_data, selected_notes: [...form_data.selected_notes.filter((selected_note, index) => index !== array_index)]
                                    })}

                            />

                            : current_step === "title" ?

                                    <Input

                                        test_handle="title_input"
                                        placeholder="Writing a for each loop"
                                        label={form_information[1]}
                                        value={form_data.title}
                                        onChange={e => {set_form_data({ ...form_data, title: e.target.value })}}
                                        marginTop="15px"

                                    />

                                : current_step === "body" ?

                                    <Input

                                        test_handle="body_input"
                                        placeholder="A for each loop iterates through an array calling a function on each element"
                                        label={form_information[1]}
                                        value={form_data.body}
                                        text_area
                                        onChange={e => set_form_data({ ...form_data, body: e.target.value })}
                                        marginTop="15px"


                                    />

                                    : current_step === "optionals" ? //this step is only for notes

                                        <React.Fragment>

                                            {optional_prompt}

                                            <Input

                                                test_handle="subject_input"
                                                placeholder="Array methods"
                                                label={form_information[1]}
                                                grey
                                                value={form_data.subject}
                                                onChange={e => set_form_data({ ...form_data, subject: e.target.value })}
                                                marginTop="10px"
                                                optionals

                                            />

                                            <Input

                                                test_handle="search_tags_input"
                                                placeholder="For Loop Array Foreach"
                                                label={form_information[2]}
                                                grey
                                                value={form_data.search_tags}
                                                onChange={e => handle_search_tag_input(e, form_data, set_form_data)}
                                                optionals

                                            />

                                        </React.Fragment>

                                        : current_step === "syntax" ?

                                            <React.Fragment>

                                                {optional_prompt}

                                                <Input

                                                    test_handle="syntax_input"
                                                    placeholder={"array.forEach(element => console.log(element))"}
                                                    label={form_information[1]}
                                                    grey
                                                    value={form_data.syntax}
                                                    text_area
                                                    onChange={e => set_form_data({ ...form_data, syntax: e.target.value })}
                                                    marginTop="10px"


                                                />

                                            </React.Fragment>

                                            : current_step === "success" ?

                                                <Note details={note_details} handle_position_change={() => undefined}
                                                    toggle_share_mode={(details) => set_redirect({ data: details })} />

                                                : null}

                    {/* Error message */}

                    {/* if there is a response, and it is above 300 (error),        and it is not a search error */}
                    {response && response.status > 300 && response.data.message !== "A search string is required" &&

                        <span test_handle="form_validation_error" className={classes.error_message}>

                            {//display the error message
                                response.data.message}

                        </span>
                    }

                    {//Form navigation buttons

                        (current_step !== "note_selection") &&//if its not the note selection stage (note_selection handles it's own nav buttons)

                        <NavigationButtons //display the navigation buttons

                            width="275px"
                            marginTop={"20px"}
                            type={form_navigation_buttons}
                            on_click={(direction) => handle_form_navigation(direction, props.form_type, current_step, set_current_step, form_data, dispatch, user_id)}
                            handle_reset={() => reset_form(set_current_step, set_form_data, set_form_navigation_buttons, form_data)}
                            centered={form_navigation_buttons === "success" && true}

                        />

                    }

                </div>

            </div>

            {redirect && <Redirect to={{ pathname: "/view_all", state: { details: redirect.data } }} />}

            <Nav />

        </React.Fragment>

    )

}

export default Add_new