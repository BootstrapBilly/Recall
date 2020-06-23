import React from 'react'

//css
import classes from "./Side_drawer.module.css"

//util
import colours from "../../../../util/colours"

//assets
import Logo from "../../../../Assets/Icon/logo.svg"

//components
import NavSquare from "./Components/Nav_square"

export const Side_drawer = props => {

    return (

        <div className={[classes.container, props.drawer_open && classes.container_open].join(" ")}>

            <div className={classes.top_bar} style={{ color: colours.secondary }}>

                <img src={Logo} alt={"A Logo icon"} className={classes.logo} />
                <span className={classes.recall}>RECALL</span>

            </div>

            <div className={classes.square_container}>{["HOME", "ADD NEW", "NOTES", "SEARCH", "FRIENDS", "ACCOUNT"].map(link => <NavSquare text={link} icon={link} key={link}/>)}</div>

        </div>

    )

}

export default Side_drawer
