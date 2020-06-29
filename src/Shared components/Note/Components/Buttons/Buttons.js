import React from 'react'

//css
import classes from "./Buttons.module.css"

//util
import colours from "../../../../util/colours"

export const Buttons = () => {

    return (

        <div className={classes.container} onClick={() => console.log("a")}>

            <div className={classes.button} style={{ background: "#ff3333" }} onClick={() => console.log("cli")}>DELETE</div>

            <div className={classes.button} style={{ background: colours.secondary }}>EDIT</div>

        </div>

    )

}

export default Buttons
