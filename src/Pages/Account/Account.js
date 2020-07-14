import React, { useState, useEffect } from 'react'

//css
import classes from "./Account.module.css"

//components
import Nav from "../../Shared components/Nav/Nav"

import { useSelector, useDispatch } from "react-redux"


export const Account = () => {


    return (

        <div className={classes.container}>

            <Nav />
        </div>

    )

}

export default Account