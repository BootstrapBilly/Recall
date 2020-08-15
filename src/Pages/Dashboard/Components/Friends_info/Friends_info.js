import React, { useState } from 'react'

import classes from './Friends_info.module.css'

//util
import colours from '../../../../util/colours'
import FriendsExplained from './Components/Friends_explained/Friends_explained'
import AddingFriends from './Components/Adding_friends/Adding_friends'

//components

export const Collections_info = () => {

    const [expanded_sections, set_expanded_sections] = useState({
        explained: false,
        adding:false
    })

    return (

        <div className={classes.container}>

            {/* Explained */}

            <div className={classes.section_title} style={{ color: colours.primary }} onClick={() => set_expanded_sections({ ...expanded_sections, explained: !expanded_sections.explained })}>Friends explained</div>

            {expanded_sections.explained && <FriendsExplained />}

            {/* Adding */}

            <div className={classes.section_title} style={{ color: colours.primary }} onClick={() => set_expanded_sections({ ...expanded_sections, adding: !expanded_sections.adding })}>Adding a friend</div>

            <div className={expanded_sections.adding && classes.white_background_provider}>

                {expanded_sections.adding && <AddingFriends />}

            </div>

        </div>

    )

}

export default Collections_info
