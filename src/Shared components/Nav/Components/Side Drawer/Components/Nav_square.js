import React, {useEffect} from 'react'

//css
import classes from "./Nav_square.module.css"

//util
import colours from '../../../../../util/colours'

//redux hooks
import { useSelector, useDispatch } from "react-redux"

//redux action creators
import { set_active_link } from "../../../../../Store/Actions/3_active_nav_link_action"

//functions
import set_active_link_on_render from "./Functions/set_active_link_on_render"

export const Nav_square = props => {

    //?selectors
    const active_link = useSelector(state => state.nav.link)//get the currently active link so it is highlighted in the side drawer

    //-config
    const dispatch = useDispatch()//intitialise the usedispatch hook

    const handle_click = () => {//this is called when a navigation link is clicked

        dispatch(set_active_link(props.text))//update the active link in redux to change the currently highlighted square
        props.onClick()//call the props function to redirect them to their desired page

    }
    
    useEffect(() => {set_active_link_on_render(dispatch)}, [window.location.href])//whenever the url changes, set the active nav link

    return (

        <div className={classes.container} onClick={() => handle_click()} test_handle={props.test_handle}>

            <img src={require(`../../../../../Assets/Icon/${

                active_link.toString().toLowerCase() === props.text.toString().toLowerCase() ? props.icon : `${props.icon}-grey`}.svg`)//if this link is active, use the normal icon, if not use the greyed out one

            }
                alt={`${props.icon} navigation icon`}
                className={classes.icon}
            />

            <div className={classes.text} style={{ color: colours.primary }}>{props.text}</div>

        </div>

    )

}

export default Nav_square