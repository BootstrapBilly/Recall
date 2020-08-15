import React, { useState } from 'react'

import classes from './Collections_info.module.css'

//util
import colours from '../../../../util/colours'
import CollectionsExplained from './Components/Collections_explained/Collections_explained'
import AddingCollection from './Components/Adding_collection/Adding_collection'
import ViewingSearchingSharingCollections from './Components/Viewing_Searching_Sharing_collections/Viewing_Searching_Sharing_collections'

//components

export const Collections_info = () => {

    const [expanded_sections, set_expanded_sections] = useState({
        explained: false,
        adding: false,
        vss:false
    })

    return (

        <div className={classes.container}>

            {/* Explained */}

            <div className={classes.section_title} style={{ color: colours.primary }} onClick={() => set_expanded_sections({ ...expanded_sections, explained: !expanded_sections.explained })}>Collections explained</div>

            {expanded_sections.explained && <CollectionsExplained />}

            {/* Adding */}

            <div className={classes.section_title} style={{ color: colours.primary }} onClick={() => set_expanded_sections({ ...expanded_sections, adding: !expanded_sections.adding })}>Adding a collection</div>


            <div className={expanded_sections.adding && classes.white_background_provider}>

                {expanded_sections.adding && <AddingCollection />}

            </div>

            {/* Viewing, Searching, Sharing */}

            <div className={classes.section_title} style={{ color: colours.primary }} onClick={() => set_expanded_sections({ ...expanded_sections, vss: !expanded_sections.vss })}>Viewing, searching for and sharing collections</div>

            <div className={expanded_sections.vss && classes.white_background_provider}>

                {expanded_sections.vss && <ViewingSearchingSharingCollections />}

            </div>

        </div>

    )

}

export default Collections_info
