import React, {useState} from 'react'

//css
import classes from "./Nav.module.css"

//Assets
import MenuIcon from "../../Assets/Icon/nav_menu.svg"

//util
import colours from '../../util/colours'

//components
import SideDrawer from "./Components/Side Drawer/Side_drawer"

export const Nav = props => {

    const [drawer_open, set_drawer_open] = useState(false)//a state to determine whether to show the side drawer

    return (

        <div className={classes.container}>

            {/* Hamburger menu */}
            <div className={classes.menu_container}>

                {/* <img src={MenuIcon} alt={"Navigation menu icon"} className={classes.menu_icon} onClick={()=> set_drawer_open(!drawer_open)} /> */}

                <span className={[classes.menu_button,drawer_open && classes.menu_button_open].join(" ")} style={{background:colours.primary}} onClick={()=> set_drawer_open(!drawer_open)}>MENU</span>

            </div>

            <SideDrawer drawer_open={drawer_open}/>

        </div>
    )

}

export default Nav