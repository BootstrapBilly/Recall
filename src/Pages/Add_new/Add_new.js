import React, { useState, useEffect } from 'react'

//css
import classes from "./Add_new.module.css"

//components
import Nav from "../../Shared components/Nav/Nav"
import Input from "../../Shared components/Input/Input"
import NavigationButtons from "../../Shared components/Navigation_buttons/Navigation_buttons"
import NotesSelect from "./Components/Notes_select/Notes_select"
import Note from "../../Shared components/Note/Note"

//util
import colours from '../../util/colours'

//external
import { useDispatch, useSelector } from "react-redux"

//functions
import handle_form_navigation from "./Functions/handle_form_navigation"
import handle_dynamic_button_display from './Functions/handle_dynamic_button_display'

//redux action creators
import { clear_response } from "../../Store/Actions/0_submit_form_action"

//functions
import generate_form_labels from "./Functions/generate_form_labels"

//assets
import man_pointing from "../../Assets/Abstract/man-pointing.svg"

export const Add_new = props => {

    //-config
    const dispatch = useDispatch()//initialize the usedispatch hook

    //?selectors
    const response = useSelector(state => state.form.response)//grab the form submission response from the reducer

    //*states
    const [current_step, set_current_step] = useState("title")//state to hold the current step of the form
    const [show_form_navigation_buttons, set_show_form_navigation_buttons] = useState(false)//show different buttons depending on input
    // const [form_type, set_form_type] = useState(null)//hold the type of form (note or collection) - set by the optionsSelect component
    const [notes_search_string, set_notes_search_string] = useState(null)//hold the string used to find notes when adding them to a collection
    const [selected_notes, set_selected_notes] = useState([])//hold the selected notes (when adding a collection)
    const [keyboard_open, set_keyboard_open] = useState(false)//a state to detect when the keyboard is open on mobile

    const [form_data, set_form_data] = useState({// a state to hold the note information to be submitted to the backend

        title: null,
        subject: null,
        search_tags: null,//used to make searching easier and faster
        body: null,
        syntax: null,//stores the syntax NOTE ONLY
        notes: []//holds an array of notes collection ONLY

    })

    const data = generate_form_labels(current_step, props.form_type)//call the function to generate the data based on what the form step is

    //_functions

    // const handle_selection = (option) => {//used to set the form type to note or collection (Called by the optionselect component)

    //     set_form_type(option)//set the form type to either note or collection
    //     set_current_step("title")//set the current step of the form to title(1st step)
    //     set_show_form_navigation_buttons("back")//set the navigation buttons to show only back

    // }

    const reset_form = () => {//used to reset the form back to the type selection (1st screen note or collection)

        set_current_step("title")//set the step back to selection

        set_form_data({//reset all the form data to default

            title: null,
            subject: null,
            search_tags: null,
            body: null,
            syntax: null,
            notes: []

        })

        // set_form_type(null)//reset the type of form so it can be selected again
        set_show_form_navigation_buttons(false)//reset the navigation buttons so they do not show on the selection screen
        set_notes_search_string(null)//reset the notes search input
        clear_response()//clear the response
    }

    //!Effects

    //This effect calls the helper function to dynamically set the navigation buttons, based on what the form step is and if the inputs are populated
    //gets called every time the form step changes or the inputs change
    useEffect(() => { handle_dynamic_button_display(props.form_type, form_data, current_step, set_show_form_navigation_buttons, selected_notes) }, [form_data, current_step, props.form_type, selected_notes])

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

        if (response && response.status === 201) {//if a 201 is detected

            set_current_step("success")

            // reset_form()//reset the form

            // clear_response()//clear the response

            // Alert("Note added successfully", "success", { top: "100px" })//show the user an alert that their note was added successfully

        }

        if (response && response.data.message === "note deleted successfully") {

            clear_response()//clear the response

            reset_form()

        }

    }, [response])

    return (

        <React.Fragment>

            <div className={classes.container}>

                <div className={classes.background_overlay}></div>

                <div className={classes.form_wrapper}>

                <img src={man_pointing} alt={"a man pointing to the form"} className={classes.man_pointing}/>

                    <span className={classes.title} style={{ color: current_step === "optionals" || current_step === "syntax" ? "grey" : colours.primary, marginTop: current_step === "selection" && "45px" }}>{data[0]}</span>

                    {/* {!form_type && <OptionSelect handle_selection={(option) => handle_selection(option)} />} */}

                    {
                        //form_type &&

                        current_step === "title" ?

                            <Input
                                test_handle="title_input"
                                placeholder="Writing a for each loop"
                                label={data[1]}
                                value={form_data.title}
                                onChange={e => set_form_data({ ...form_data, title: e.target.value })}
                                toggle_keyboard_open={() => set_keyboard_open(!keyboard_open)}
                                marginTop="15px" />

                            : current_step === "body" ?

                                <Input
                                    test_handle="body_input"
                                    placeholder="A for each loop iterates through an array calling a function on each element"
                                    label={data[1]}
                                    value={form_data.body}
                                    text_area
                                    onChange={e => set_form_data({ ...form_data, body: e.target.value })}
                                    toggle_keyboard_open={() => set_keyboard_open(!keyboard_open)}
                                    marginTop="15px" />

                                : current_step === "notes" ? //this step is only for collections

                                    <div className={classes.form_step_container}>

                                        <Input
                                            test_handle="notes_search_bar"
                                            label={data[1]}
                                            value={notes_search_string}
                                            onChange={e => set_notes_search_string(e.target.value)}
                                            toggle_keyboard_open={() => set_keyboard_open(!keyboard_open)}
                                            marginTop="20px"

                                        />

                                        <NotesSelect
                                            search_string={notes_search_string}
                                            toggle_keyboard_open={() => set_keyboard_open(!keyboard_open)}
                                            selected_notes={selected_notes}
                                            reset_search_string={() => set_notes_search_string(null)}
                                            handle_select_note={(note) => set_selected_notes(selected_notes => [...selected_notes, note])}
                                            handle_remove_note={(note) => set_selected_notes(selected_notes => [...selected_notes.filter(selected_note => selected_note !== note)])}
                                        />

                                    </div>


                                    : current_step === "optionals" ? //this step is only for notes

                                        <React.Fragment>

                                            <div className={classes.prompt_text} style={{ color: colours.primary }}>This step is optional and may be skipped</div>

                                            <Input
                                                test_handle="subject_input"
                                                placeholder="Array methods"
                                                label={data[1]}
                                                grey
                                                value={form_data.subject}
                                                onChange={e => set_form_data({ ...form_data, subject: e.target.value })}
                                                toggle_keyboard_open={() => set_keyboard_open(!keyboard_open)}
                                                marginTop="10px" />

                                            <Input
                                                test_handle="search_tags_input"
                                                placeholder="For Loop Array Foreach"
                                                label={data[2]}
                                                grey
                                                value={form_data.search_tags}
                                                onChange={e => set_form_data({ ...form_data, search_tags: e.target.value })}
                                                toggle_keyboard_open={() => set_keyboard_open(!keyboard_open)}

                                            />

                                        </React.Fragment>

                                        : current_step === "syntax" ?

                                            <React.Fragment>

                                                <div className={classes.prompt_text} style={{ color: colours.primary }}>This step is optional and may be skipped</div>

                                                <Input
                                                    test_handle="syntax_input"
                                                    placeholder={"array.forEach(element => console.log(element))"}
                                                    label={data[1]}
                                                    grey
                                                    value={form_data.syntax}
                                                    text_area
                                                    onChange={e => set_form_data({ ...form_data, syntax: e.target.value })}
                                                    toggle_keyboard_open={() => set_keyboard_open(!keyboard_open)}
                                                    marginTop="10px"
                                                />

                                            </React.Fragment>



                                            : current_step === "success" ?

                                                <Note details={form_data}  />

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

                        show_form_navigation_buttons &&//if the form has been selected

                        <NavigationButtons //show the navigation buttons
                            width="275px"
                            marginTop={"20px"}
                            type={show_form_navigation_buttons}
                            on_click={(direction) => handle_form_navigation(direction, props.form_type, current_step, set_current_step, form_data, dispatch, set_notes_search_string)
                            }
                            handle_reset={() => reset_form()}
                        />

                    }
                </div>

            </div>

            <div className={classes.bottom_section} >

                {/* <img src={man_on_computer} alt="a man on a computer" className={classes.bottom_image} /> */}

            </div>

            

            <Nav />
        </React.Fragment>

    )

}

export default Add_new