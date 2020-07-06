import React, { useState, useEffect } from 'react'

//css
import classes from "./Search_tags.module.css"

//components
import Tag from "./Components/Tag"

//util
import colours from "../../../../util/colours"

export const Search_tags = props => {

    const [search_tags, set_search_tags] = useState(props.search_tags)
    const [new_tag, set_new_tag] = useState("")

    const handle_tag_input = event => {

        if (event.target.value === " ") return

        if (!/^\w+$/.test(event.target.value) && new_tag.length > 1) return //if the key being pressed is not 0-9/aA-zZ, do not update the value

        set_new_tag(event.target.value)//otherwise, update the value

    }

    const handle_tag_insertion = () => {

        set_search_tags(search_tags => [...search_tags, new_tag])

        set_new_tag("")

    }

    const handle_tag_removal = search_tag => {

        set_search_tags(search_tags => [...search_tags.filter(tag => tag !== search_tag)])

    }

    useEffect(() => {

        props.handle_tag_change(search_tags)

    }, [search_tags])

    useEffect(() => {

        if (props.re_render_tags) {

            console.log("triggered")

            set_search_tags(props.search_tags)
            props.reset_re_render()
        }

    }, [props.re_render_tags])

    return (

        <React.Fragment>

            <div className={classes.container}>

                {search_tags.map(tag => <Tag text={tag} edit_mode={props.edit_mode} handle_tag_removal={(tag) => handle_tag_removal(tag)} key={tag} />)}

            </div>

            {props.edit_mode &&

                <div className={classes.input_wrapper}> {/* Make the search tag an input, to add a new search tag */}

                    <input test_handle="search_tag_input"

                        size="15"
                        className={classes.input}
                        placeholder={"ADD SEARCH TAG"}
                        style={{ border: "1px solid wheat", background: "wheat", fontSize: "12px", textAlign: "center", padding: "2px 0" }}
                        onChange={(event) => handle_tag_input(event)}
                        value={new_tag}
                        onKeyPress={(e) => e.key === "Enter" && new_tag.length && handle_tag_insertion()}

                    />

                    <div className={classes.add_tag_button} style={{ borderColor: colours.green, color: colours.green }}
                        onClick={() => new_tag.length && handle_tag_insertion()} test_handle="add_tag_button"
                    >+</div>

                </div>
            }

        </React.Fragment>
    )

}

export default Search_tags