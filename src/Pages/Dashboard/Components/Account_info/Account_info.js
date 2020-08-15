import React, { useState } from 'react'

import classes from './Account_info.module.css'

//util
import colours from '../../../../util/colours'
import AccountManagementInfo from './Components/Account_management_info'

//components
export const Account_info = () => {

    const [expanded, set_expanded] = useState(false)

    return (

        <div className={classes.container}>

            <div className={classes.section_title} style={{ color: colours.primary }} onClick={() => set_expanded(!expanded)}>Managing your account</div>

            <div className={expanded && classes.white_background_provider}>

                {expanded && <AccountManagementInfo />}

            </div>

        </div>

    )

}

export default Account_info
