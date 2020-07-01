import React from 'react'

//css
import classes from "./Buttons.module.css"

//util
import colours from "../../../../util/colours"

//redux action creators
import {submit_form} from "../../../../Store/Actions/0_submit_form_action"

//redux hooks
import {useDispatch} from "react-redux"

export const Buttons = props => {

    const dispatch = useDispatch()

    const handle_delete = () => {

        props.reset_expanded()
        dispatch(submit_form({ user_id: "5eecd941331a770017a74e44", title:props.title}, "delete_note"))
    }

    return (

        <div className={classes.container}>

            <div className={classes.buttons} style={{visibility:!props.expanded && "hidden"}}>

                <div className={classes.button} style={{ background: "#ff3333" }} onClick={()=> handle_delete()}>DELETE</div>
                <div className={classes.button} style={{ background: colours.secondary }}>EDIT</div>

            </div>


        </div>

    )

}

export default Buttons
