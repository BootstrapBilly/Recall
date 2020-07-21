import React from 'react'
//css
import classes from './Landing.module.css'

//util
import colours from '../../../../util/colours'

//components
import Logo from "../../../../Shared components/Logo/Logo"
import Note from "../../../../Shared components/Note/Note"

//assets
import try_me_arrow from "../../../../Assets/Icon/try-me-arrow.svg"

export const Landing = props => {

    const details = {

        title: "JavaScript For Each Loop",
        subject: "JavaScript array methods",
        search_tags: ["Javascript", "loops"],
        body: "A forEach loop iterates through an array, calling the specified logic on each element.",
        syntax: '["1", "2", "3"].forEach(element => console.log(element)).',
        notes: null,
        _id: "hardcoded"

    }

    return (

        <div className={classes.container}>

            <div className={classes.top_section}>

                <div className={classes.outer_ring} style={{background:`${colours.primary}1A`}}>

                    <div className={classes.inner_ring} style={{background:`${colours.primary}26`}}>

                        <div className={classes.logo_container}>

                            <Logo />

                        </div>

                    </div>

                </div>

                <span className={classes.recall} style={{color:colours.primary}}>RECALL</span>
                <span className={classes.study_smarter} style={{color:colours.primary}}>CODE SMARTER</span>

            </div>

            <div className={classes.note_container}>

                <Note details={details} example/>

                <div className={classes.try_me_container}>

                    <span style={{color:colours.primary}}>Try me !</span>

                    <img src={try_me_arrow} alt="Arrow point to note"  className={classes.try_me_arrow}/>

                </div>

            </div>

            <div test_handle={"CTA_button"} className={classes.cta_button} style={{background:colours.primary}} onClick={props.handle_go_forward}>Find out more</div>

        </div>

    )

}

export default Landing

