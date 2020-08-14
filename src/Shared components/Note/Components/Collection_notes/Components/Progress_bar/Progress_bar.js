import React from 'react'

import classes from './Progress_bar.module.css'

//util
import colours from "../../../../../../util/colours"

//assets
import arrow from "../../../../../../Assets/Icon/collection_navigation_arrow.svg"

export const Progress_bar = props => {

    return (

        <div className={classes.container}>

            <span className={classes.current_note} style={{ color: colours.secondary }}>Current note :</span>

            <div className={classes.number_container}>

                <img

                    src={arrow}
                    alt="View previous note"
                    className={classes.arrow_left}
                    style={{ display: props.current_note_in_view_index < 1 ? "none" : "flex" }}
                    onClick={props.handle_navigate.bind(this, -1)}

                />

                {
                    props.numbers.map((number, index) =>

                        <span
                            className={classes.indicator}
                            key={index}
                            style={{ opacity: props.current_note_in_view_index !== index && "0.3" }}
                            onClick={props.handle_number_click.bind(this, index)}
                        >
                            {number}

                        </span>)
                }

                <img

                    src={arrow}
                    alt="View next note"
                    className={classes.arrow_right}
                    onClick={props.handle_navigate.bind(this, 1)}
                    style={{ display: props.current_note_in_view_index === props.total_num_notes - 1 && "none" }}

                />

            </div>

        </div>

    )

}

export default Progress_bar
