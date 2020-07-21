import React, {useEffect, useState} from 'react'

//css
import classes from "./Dashboard.module.css"

//components
import Nav from "../../Shared components/Nav/Nav"
import NoteDetail from "../../Shared components/Note/Note"

//redux action creators
import {submit_form} from "../../Store/Actions/0_submit_form_action"

//redux hooks
import {useSelector, useDispatch} from "react-redux"

export const Dashboard = () => {

    const dispatch = useDispatch()

    //?selectors
    const response = useSelector(state => state.form.response)
    const user_id = useSelector(state => state.auth.user_id)

    return (

        <div className={classes.container}>

            <Nav />

        </div>

    )

}

export default Dashboard
