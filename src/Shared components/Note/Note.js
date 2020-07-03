import React, { useState, useRef, useEffect } from 'react'

//css
import classes from "./Note.module.css"

//util
import capitalise_first from "../../util/capitalize_first"
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
import { submit_form } from "../../Store/Actions/0_submit_form_action"

export const Note = props => {

    //-config
    const dispatch = useDispatch()

    //?selectors
    //const response = useSelector(state => state.form.response)

    const [expanded, set_expanded] = useState(false)
    const [height, set_height] = useState(0)
    const [edit_mode, set_edit_mode] = useState(false)

    const [form_data, set_form_data] = useState({// a state to hold the note information to be submitted to the backend for editing purposes

        title: null,
        subject: null,
        search_tags: null,//used to make searching easier and faster
        body: null,
        syntax: null,//stores the syntax NOTE ONLY
        notes: []//holds an array of notes collection ONLY

    })

    const ref = useRef(null)

    // eslint-disable-next-line
    useEffect(() => set_height(ref.current.clientHeight))

    const handle_edit_click = () => {

        set_edit_mode(!edit_mode)

    }

    const handle_cancel_click = () => {

        set_edit_mode(false)
        set_form_data({
            title: props.details.title,
            subject: props.details.subject || "No subject",
            search_tags: props.details.search_tags,//used to make searching easier and faster
            body: props.details.body,
            syntax: props.details.syntax,//stores the syntax NOTE ONLY
            notes: []//holds an array of notes collection ONLY
        })

    }

    const send_update_request = () => {

        return dispatch(submit_form(
            {
                user_id: "5eecd941331a770017a74e44",
                title: props.details.title,
                new_title:form_data.title,
                new_subject:form_data.subject,
                new_body:form_data.body,
                new_search_tags: form_data.search_tags,
                new_syntax: form_data.syntax
            }

            , "update_note"))

    }

    return (

        <div className={classes.container} test_handle="note_container"

            style={{ height: `${height}px`, paddingBottom: expanded && "70px" }}
        >

            <div className={classes.measuring_wrapper} ref={ref} >

                <div className={classes.collapsed_content}>

                    <Input value={form_data.title || props.details.title}
                        edit_mode={edit_mode}
                        type="title"
                        handle_change={(type, e) => set_form_data({ ...form_data, [type]: e.target.value })} />

                    <Input value={form_data.subject || props.details.subject || "No subject"}
                        edit_mode={edit_mode}
                        style={{ fontSize: "15px", color: "grey" }}
                        type="subject"
                        handle_change={(type, e) => set_form_data({ ...form_data, [type]: e.target.value })} />

                </div>

                {expanded &&

                    <div className={classes.expanded_content}>

                        <Body value={form_data.body || props.details.body} edit_mode={edit_mode} handle_change={(type, e) => set_form_data({ ...form_data, [type]: e.target.value })} />

                        {props.details.syntax && <div className={classes.copy_button} style={{ background: colours.green }}>COPY CODE</div>}

                        {props.details.search_tags && <SearchTags search_tags={props.details.search_tags} edit_mode={edit_mode} />}

                        <Buttons
                            expanded={expanded}
                            title={props.details.title}
                            reset_expanded={() => set_expanded(false)}
                            handle_edit_click={() => handle_edit_click()}
                            edit_mode={edit_mode}
                            handle_cancel_click={() => handle_cancel_click()}
                            handle_save_click={() => send_update_request()}
                        />

                    </div>

                }

                <ToggleIcon expanded={expanded} handle_collapse={() => set_expanded(false)} handle_expand={() => set_expanded(true)} />

            </div>

        </div>


    )

}

export default Note
