import React, {useState} from 'react'

//css
import classes from "./Tag.module.css"

//util
import colours from '../../../../../util/colours'

export const Tag = props => {

    const [focused, set_focused] = useState(false)
    return (

        <React.Fragment>

            {props.text === "Add new" ?

                <div className={classes.input_wrapper}>

                    <input size="11" className={classes.input} placeholder={"ADD NEW TAG"} style={{border: "1px solid wheat", background:"wheat", fontSize:"12px", textAlign:"center", padding:"2px 0"}} onFocus={()=> set_focused(true)} onBlur={()=> set_focused(false)}/>

                </div>

                : <div className={classes.container} style={{ border: `1px solid ${colours.primary}`, color: colours.primary }}>

                    {props.text.toUpperCase()}

                    {props.edit_mode && <div className={classes.cross} style={{ background: colours.primary }}>X</div>}

                </div>
            }
        </React.Fragment>
    )

}

export default Tag
