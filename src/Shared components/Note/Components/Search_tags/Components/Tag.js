import React from 'react'

//css
import classes from "./Tag.module.css"

//util
import colours from '../../../../../util/colours'

export const Tag = props => {

    return (

        <React.Fragment>

            {props.text === "Add new" ? //if the given array element (passed in by props) is the special "Add new" (Add new is added to the array during edit mode)

                <div className={classes.input_wrapper}> {/* Make the search tag an input, to add a new search tag */}

                    <input size="11" className={classes.input} placeholder={"ADD NEW TAG"} style={{ border: "1px solid wheat", background: "wheat", fontSize: "12px", textAlign: "center", padding: "2px 0" }} />

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
