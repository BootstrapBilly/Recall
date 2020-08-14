import React, {useState} from 'react'

import classes from './Collapsible_section.module.css'

//assets
import Arrow from "../../../../Assets/Icon/down-arrow.svg"

export const Collapsible_section = props => {

    const [expanded, set_expanded] = useState(false)

    return (

        <div className={classes.wrapper} >

            <div className={classes.container}>

                <div className={classes.top_row} onClick={()=> set_expanded(!expanded)}>
                    
                    <span className={classes.title}>{props.title}</span>
                    <img src={Arrow} alt="Expand or collapse this section" className={[classes.arrow, expanded && classes.arrow_expanded].join(" ")} />

                </div>

                {expanded && <div className={classes.component_container}>{props.children}</div>}

            </div>

        </div>

    )

}

export default Collapsible_section
