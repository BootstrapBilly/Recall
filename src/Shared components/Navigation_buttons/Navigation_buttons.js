import React from 'react'

//css
import classes from './Navigation_buttons.module.css'
import colours from '../../util/colours'

export const Navigation_buttons = props => {

    /* This component takes a type from props which is set by the handle_form_navigation component
    
    The prop type determines the text and colour of the button*/

    return (

        <div className={classes.container} style={{ width: props.width, marginTop: props.marginTop, justifyContent: props.centered && "center" }}>

            {props.type !== "next" && props.type !== "success" &&

                <div

                    test_handle="form_back_button"
                    className={[classes.back_button, classes.button].join(" ")}
                    onClick={props.on_click.bind(this, "back")}
                    // eslint-disable-next-line

                    style={{

                        border: `3px solid ${colours.secondary}`,
                        color: colours.secondary,
                        display: (props.type === "next" || props.type === "grey_next") && "none",
                        transform: (props.type === "grey_add_to_collection" || props.type === "add_to_collection") ? "scale(1.3)" : undefined,
                        marginRight: (props.type === "grey_add_to_collection" || props.type === "add_to_collection") ? "30px" : undefined,

                    }}>

                    Go Back

                </div>

            }

            {props.type !== "success" &&

                <div

                    test_handle="form_next_button"
                    className={[classes.next_button, classes.button].join(" ")}
                    onClick={props.type === "back" || props.type === "back_submit" ? null : props.on_click.bind(this, "next")}

                    style={{

                        border: `3px solid ${props.type === "back" || props.type === "back_submit" || props.type === "grey_next" || props.type === "grey_add_to_collection" ? "grey"

                            : props.type === "add" || props.type === "add_to_collection" ? colours.green

                                : colours.primary}`,

                        background: props.type === "back" || props.type === "back_submit" || props.type === "grey_next" || props.type === "grey_add_to_collection" ? "grey"

                            : props.type === "add" || props.type === "add_to_collection" ? colours.green

                                : colours.primary,

                        marginLeft: props.type !== "grey_next" && props.type !== "next" && "15px",

                        transform: props.type === "grey_add_to_collection" || props.type === "add_to_collection" ? "scale(1.3)" : undefined

                    }}>

                    {//Text inside the button
                        props.type === "back_submit" || props.type === "submit" ? "Sign up"
                            : props.type === "skip" ? "Skip"
                                : props.type === "add" ? "Finished"
                                    : props.type === "grey_add_to_collection" || props.type === "add_to_collection" ? "Add Notes"
                                : "Next"
                    }

                </div>
            }

            {props.type === "success" &&

                <div

                    test_handle="form_reset_button"
                    className={[classes.reset_button, classes.button].join(" ")}
                    onClick={props.handle_reset}
                    style={{ background: colours.green }}
                >

                    Add Another

                </div>}

        </div>

    )

}

export default Navigation_buttons
