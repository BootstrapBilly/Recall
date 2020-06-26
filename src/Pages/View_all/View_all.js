import React from 'react'

//css
import classes from "./View_all.module.css"

//components
import Nav from "../../Shared components/Nav/Nav"

export const View_all = () => {

    return (

        <div className={classes.container}>
            View all

            <Nav />
        </div>

    )

}

export default View_all