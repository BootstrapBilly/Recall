import React, { useState } from 'react'

import classes from './Notes_info.module.css'

//util
import colours from '../../../../util/colours'

//components
import Whats from "./Components/Whats/Whats"
import Adding from "./Components/Adding/Adding"

export const Notes_info = () => {

    const [expanded_sections, set_expanded_sections] = useState({
        whats: false,
        adding: false
    })

    return (

        <div className={classes.container}>

            <div className={classes.section_title} style={{ color: colours.primary }} onClick={() => set_expanded_sections({ ...expanded_sections, whats: !expanded_sections.whats })}>Notes explained</div>

            {expanded_sections.whats && <Whats />}

            <div className={classes.section_title} style={{ color: colours.primary}} onClick={() => set_expanded_sections({ ...expanded_sections, adding: !expanded_sections.adding })}>Adding new notes</div>

            {expanded_sections.adding && <Adding />}

        </div>

    )

}

export default Notes_info
