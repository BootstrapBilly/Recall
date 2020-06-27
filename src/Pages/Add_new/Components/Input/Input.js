import React, {useState} from 'react'

//css
import classes from "./Input.module.css"

//util
import colours from '../../../../util/colours'

export const Input = props => {

    const [selected, set_selected] = useState(false)

    return (

        <div className={classes.container} style={{borderColor:props.grey  && selected ?  "grey" : selected ? colours.primary : "transparent", marginTop:props.marginTop}} onFocus={()=> set_selected(true)} onBlur={()=> set_selected(false)}> 

            <span className={classes.description} style={{color:props.grey ? "grey" : colours.primary}}>{props.description}</span>

            {props.text_area ? <textarea value={props.value} type="text" className={classes.text_area} onChange={props.handle_input}></textarea>
            
        : <input type="text" className={classes.input} onChange={props.handle_input} value={props.value}></input>}

        </div>

    )

}

export default Input