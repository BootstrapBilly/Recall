import React from 'react'

//css
import classes from './No_friends_prompt.module.css'

//assets
import Man_alone from "../../../../Assets/Graphics/alone.svg"

export const No_friends_prompt = () => {

    return (


        <div className={classes.container} test_handle="no_friends_prompt">

            <img src={Man_alone} alt="A man alone" className={classes.alone_man} />

            <span className={classes.prompt_text}>You have no friends :C</span>
            <span className={classes.prompt_text_second_line}>Click the add new friend button at the top to add some</span>

        </div>

    )

}

export default No_friends_prompt