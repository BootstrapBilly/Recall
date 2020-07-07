import React, { useState, useEffect } from 'react'

//css
import classes from "./Search_tags.module.css"

//components
import Tag from "./Components/Tag"

//util
import colours from "../../../../util/colours"

//functions
import handle_tag_input from "./Functions/handle_tag_input"
import handle_tag_insertion from "./Functions/handle_tag_insertion"

export const Search_tags = props => {

    const [search_tags, set_search_tags] = useState(props.search_tags)//the search tags to render, initialised by props, modified by functions in this component
    const [new_tag, set_new_tag] = useState("")//hold the input of any new search tags which may be entered during edit mode

    //if the search tags are modified, call the parent function to populate the overwritten search tags array with the new search tags
    // eslint-disable-next-line
    useEffect(() => { props.handle_tag_change(search_tags) }, [search_tags])

    useEffect(() => {

        if (props.re_render) {//if the user presses the cancel button, re-render in the parent component is set to true

            set_search_tags(props.search_tags)//reset the search tags (because they cancelled and did not save)
            props.reset_re_render()//reset the re-render state in the parent mode
        }
        // eslint-disable-next-line
    }, [props.re_render])

    return (

        <React.Fragment>

            <div className={classes.container}>

                {search_tags.map(tag =>

                    <Tag

                        text={tag}
                        edit_mode={props.edit_mode}
                        key={tag}
                        handle_tag_removal={(search_tag) => set_search_tags(search_tags => [...search_tags.filter(tag => tag !== search_tag)])}

                    />)}

            </div>

            {props.edit_mode && //if edit mode is enabled, show the input to add new search tags

                <div className={classes.input_wrapper}> {/* Make the search tag an input, to add a new search tag */}

                    <input test_handle="search_tag_input"

                        size="15"
                        className={classes.input}
                        placeholder={"ADD SEARCH TAG"}
                        style={{ border: "1px solid wheat", background: "wheat", fontSize: "12px", textAlign: "center", padding: "2px 15px" }}
                        onChange={(event) => handle_tag_input(event, new_tag, set_new_tag)}
                        value={new_tag}
                        onKeyPress={(e) => e.key === "Enter" && new_tag.length && handle_tag_insertion(search_tags, set_search_tags, new_tag, set_new_tag)}

                    />

                    <div

                        className={classes.add_tag_button}
                        style={{ borderColor: colours.green, color: colours.green }}
                        onClick={() => new_tag.length && handle_tag_insertion(search_tags, set_search_tags, new_tag, set_new_tag)} test_handle="add_tag_button">

                        + {/* The plus button next to the new search tag input  */}

                    </div>

                </div>
            }

        </React.Fragment>
    )

}

export default Search_tags