import React, { useState, useEffect } from 'react'

import classes from './Password_criteria.module.css'

//assets
import grey_tick from "../../Assets/Icon/password_tick_grey.svg"
import green_tick from "../../Assets/Icon/password_tick.svg"

//util
import validate_password from "../../util/validate_password"

export const Password_criteria = props => {

    const [met_criteria, set_met_criteria] = useState({//this is responsible for turning each tick green when the criteria is met, it is manipulated by the effect on line 25

        0: false,
        1: false,
        2: false

    })

    //!effects
    useEffect(() => {//this is called whenever the parent's input value changes

        //it runs the input through the validator util function
        const validation_result = validate_password(props.password, props.repeat_password)

        //then it updates the state accordling which then updates the tick for each criteria
        set_met_criteria({ 0: validation_result.length, 1: validation_result.uppercase, 2: validation_result.match })

    }, [props.password, props.repeat_password])

    return (

        <div className={classes.container} style={{ marginLeft: props.signup && "-10px", width: props.width, marginRight: props.marginRight }}>

            <span className={classes.title}>Remember, passwords must:</span>

            <div className={classes.requirements_container}>

                {["Be at least 8 characters", "Contain an uppercase letter", "Match"].map((requirement, index) =>

                    <div className={classes.requirement} key={requirement} >

                        <img test_handle={met_criteria[index] ? "green_tick" : "grey_tick"} src={met_criteria[index] ? green_tick : grey_tick} alt="A tick" className={classes.icon} />
                        {requirement}

                    </div>

                )}


            </div>

        </div >

    )

}

export default Password_criteria