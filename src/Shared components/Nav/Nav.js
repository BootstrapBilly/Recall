import React, { useState } from 'react'

//css
import classes from "./Nav.module.css"

//components
import SideDrawer from "./Components/Side Drawer/Side_drawer"

export const Nav = props => {

    const [drawer_open, set_drawer_open] = useState(false)//a state to determine whether to show the side drawer

    return (

        <React.Fragment>

            <div className={[classes.container, drawer_open && classes.container_open].join(" ")} onClick={() => drawer_open && set_drawer_open(false)}></div>

            <SideDrawer drawer_open={drawer_open} handle_toggle={() => {
                set_drawer_open(!drawer_open)

            }} />

        </React.Fragment>
    )

}

export default Nav