import React, {useState} from 'react'

//css
import classes from './Side_menu.module.css'

//assets
import Toggle from "../../../../Assets/Icon/arrow.svg"
import Add from "../../../../Assets/Icon/add.svg"

//util
import colours from '../../../../util/colours'

//redux hooks
import {useDispatch} from "react-redux"

//redux action creators
import {collapse_all} from "../../../../Store/Actions/1_note_action"

//external
import { Redirect } from 'react-router'

export const Side_menu = () => {

    //-config
    const dispatch = useDispatch()

    //*states
    const [redirect, set_redirect] = useState(false)

    return (

        <div className={classes.container}>
            
            <div className={classes.icon_container} onClick={()=> dispatch(collapse_all())}>

                <img src={Toggle} alt="Icon to collapse all notes" className={classes.collapse_icon} />
                <span className={classes.icon_text} style={{color:colours.secondary}}>Close All</span>

            </div>
            
            <div className={classes.icon_container} onClick={()=> set_redirect(true)}>

                <img src={Add} alt="Icon to add a new note" className={classes.add_new_icon} />
                <span className={classes.icon_text} style={{color:colours.secondary, marginTop:"5px"}}>Add new</span>

            </div>

            {redirect && <Redirect to="add_new"/>}

        </div>

    )

}

export default Side_menu
