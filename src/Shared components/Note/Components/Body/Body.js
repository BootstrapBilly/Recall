import React from 'react'

//css
import classes from "./Body.module.css"

//util
import gradients from "../../../../util/gradients"

export const Body = props => {

    return (

        <div className={classes.container} >

            Wrap the root of the component in a provider
            
            <div className={classes.expand_container} style={{background: gradients[props.index]}}>Expand for more</div>
        </div>

    )

}

export default Body
