import React, { useState } from 'react'

//css
import classes from "./Tag.module.css"

//util
import colours from '../../../../../util/colours'

export const Tag = props => {

    const [new_tag, set_new_tag] = useState("")

    const handle_tag_input = event => {

        if (!/^\w+$/.test(event.target.value) && new_tag.length > 1) return //if the key being pressed is not 0-9/aA-zZ, do not update the value

        set_new_tag(event.target.value)//otherwise, update the value

    }

    return (

        <React.Fragment>

            {props.text === "Add new" ? //if the given array element (passed in by props) is the special "Add new" (Add new is added to the array during edit mode)

                <div className={classes.input_wrapper}> {/* Make the search tag an input, to add a new search tag */}

                    <input

                        size="15"
                        className={classes.input}
                        placeholder={"ADD SEARCH TAG"}
                        style={{ border: "1px solid wheat", background: "wheat", fontSize: "12px", textAlign: "center", padding: "2px 0" }}
                        onChange={(event) => handle_tag_input(event)}
                        value={new_tag}
                        onKeyPress={(e)=> e.key === "Enter" && new_tag.length && props.handle_tag_insertion.bind(this, new_tag)}

                    />

                    <div className={classes.add_tag_button} style={{ borderColor: colours.green, color: colours.green}} onClick={props.handle_tag_insertion.bind(this, new_tag)}>+</div>

                </div>

                : //otherwise, display the tag as normal

                <div className={classes.container} style={{ border: `1px solid ${colours.primary}`, color: colours.primary }}>

                    {props.text.toUpperCase()}

                    {props.edit_mode && <div className={classes.cross} style={{ background: colours.primary }}>X</div>}

                </div>
            }
        </React.Fragment>
    )

}

export default Tag
