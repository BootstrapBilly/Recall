import React, { useState } from 'react'

import classes from './Getting_around.module.css'

//util
import colours from '../../../../util/colours'

//assets
import logo from "../../../../Assets/Icon/logo.svg"

export const Getting_around = () => {

    const [visiting_expanded, set_visiting_expanded] = useState(false)
    const [returning_expanded, set_returning_expanded] = useState(false)

    return (

        <div className={classes.container}>

            <div className={classes.section_title} style={{ color: colours.primary }} onClick={() => set_visiting_expanded(!visiting_expanded)}>Visiting pages </div>

            {visiting_expanded &&

                <React.Fragment>

                    <span>You can select which page you want by clicking this menu icon :</span>

                    <div className={classes.icon_container}>

                        <div className={classes.toggle_button} style={{ background: colours.primary }}>Menu</div>

                    </div>

                    <span>It will always be on the left of the screen.</span>

                </React.Fragment>

            }

            <div className={classes.section_title} style={{ color: colours.primary, marginTop:"15px" }} onClick={() => set_returning_expanded(!returning_expanded)}>Returning to this page </div>

            {returning_expanded &&

                <React.Fragment>

                    <span>You can return to this page anywhere in the app by clicking this icon</span>

                    <div className={classes.icon_container}>

                        <img src={logo} alt="Logo" className={classes.logo} />

                    </div>

                    <span>It will always be in the top left corner of the screen.</span>

                </React.Fragment>

            }

        </div>

    )

}

export default Getting_around