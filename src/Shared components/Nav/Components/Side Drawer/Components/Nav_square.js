import React from 'react'

//css
import classes from "./Nav_square.module.css"

//util
import colours from '../../../../../util/colours'

//redux hooks
import {useSelector, useDispatch} from "react-redux"

//redux action creators
import {set_active_link} from "../../../../../Store/Actions/3_active_nav_link_action"

export const Nav_square = props => {

    const dispatch = useDispatch()
    
    const active_link = useSelector(state => state.nav.link)

    const handle_click = () => {

        dispatch(set_active_link(props.text))
        props.onClick()

    }

    return (

            <div className={classes.container} onClick={()=> handle_click()} test_handle={props.test_handle}>

                <img src={require(`../../../../../Assets/Icon/${active_link === props.text ? props.icon : `${props.icon}-grey`}.svg`)} alt={`${props.icon} navigation icon`} className={classes.icon} />
                <div className={classes.text} style={{ color: colours.primary }}>{props.text}</div>

            </div>

    )

}

export default Nav_square