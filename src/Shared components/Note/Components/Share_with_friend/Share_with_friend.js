import React from 'react'

import classes from './Share_with_friend.module.css'

//util
import colours from '../../../../util/colours'

//assets
import share_icon from "../../../../Assets/Icon/share.svg"

export const Share_with_friend = props => {

    return (

        <div className={classes.container} style={{background:colours.green}} onClick={props.onClick}>

            <img src={share_icon} alt="A sharing icon" className={classes.icon}/>
            
            Share

        </div>

    )

}

export default Share_with_friend