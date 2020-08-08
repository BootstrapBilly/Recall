import React from 'react'

//css
import classes from './Shared_by.module.css'

//util
import capitalizeFirstChar from '../../../../util/capitalize_first'

export const Shared_by = props => {

    console.log(props.details)

    return (

        <div className={classes.container}>
            
            Shared by : {capitalizeFirstChar(props.details.created_by.username)}

        </div>

    )

}

export default Shared_by