import React, { useState } from 'react'

import classes from './Notes_info.module.css'

//util
import colours from '../../../../util/colours'

//components
import NotesExplained from "./Components/Notes_explained/Notes_explained"
import Adding from "./Components/Adding/Adding"
import Viewing from './Components/Viewing/Viewing'
import Searching from "./Components/Searching/Searching"
import Sharing from './Components/Sharing/Sharing'

export const Notes_info = () => {

    const [expanded_sections, set_expanded_sections] = useState({
        whats: false,
        adding: false,
        viewing: false,
        searching:false
    })

    return (

        <div className={classes.container}>

            {/* Explained */}

            <div className={classes.section_title} style={{ color: colours.primary }} onClick={() => set_expanded_sections({ ...expanded_sections, whats: !expanded_sections.whats })}>Notes explained</div>

            {expanded_sections.whats && <NotesExplained />}


            {/* Adding */}
            <div className={classes.section_title} style={{ color: colours.primary }} onClick={() => set_expanded_sections({ ...expanded_sections, adding: !expanded_sections.adding })}>Adding new notes</div>

            <div className={expanded_sections.adding && classes.white_background_provider}>

                {expanded_sections.adding && <Adding />}

            </div>

            {/* Viewing */}
            <div className={classes.section_title} style={{ color: colours.primary }} onClick={() => set_expanded_sections({ ...expanded_sections, viewing: !expanded_sections.viewing })}>Viewing your notes</div>

            <div className={expanded_sections.viewing && classes.white_background_provider}>

                {expanded_sections.viewing && <Viewing />}

            </div>

            {/* Searching */}
            <div className={classes.section_title} style={{ color: colours.primary }} onClick={() => set_expanded_sections({ ...expanded_sections, searching: !expanded_sections.searching })}>Searching for specific notes</div>

            <div className={expanded_sections.searching && classes.white_background_provider}>

                {expanded_sections.searching && <Searching />}

            </div>

            {/* Sharing */}

            <div className={classes.section_title} style={{ color: colours.primary }} onClick={() => set_expanded_sections({ ...expanded_sections, sharing: !expanded_sections.sharing })}>Sharing notes with friends</div>

            <div className={expanded_sections.sharing && classes.white_background_provider}>

                {expanded_sections.sharing && <Sharing />}

            </div>


        </div>

    )

}

export default Notes_info
