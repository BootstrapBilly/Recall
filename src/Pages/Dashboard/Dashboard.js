import React from 'react'

//css
import classes from "./Dashboard.module.css"

//components
import Nav from "../../Shared components/Nav/Nav"
import TopBar from "../../Shared components/Top_bar/Top_bar"
import CollapsibleSection from "./Components/Collapsible_section/Collapsible_section"
import GettingAround from "./Components/Getting_around/Getting_around"
import NotesInfo from "./Components/Notes_info/Notes_info"
import CollectionsInfo from './Components/Collections_info/Collections_info'
import FriendsInfo from "./Components/Friends_info/Friends_info"
import AccountInfo from './Components/Account_info/Account_info'

export const Dashboard = () => {

    return (

        <div className={classes.container}>

            <TopBar title={`Home`} no_search />

            <div className={classes.content_wrapper}>

                <div className={classes.top_section_wrapper}>

                    <div className={classes.top_section_container}>

                        <span className={classes.welcome_text}>Welcome to recall</span>
                        <span className={classes.prompt_text}>On this page, you will find information about the different features of the app.</span>

                    </div>

                </div>

                {[
                    { title: "Getting around", component: <GettingAround /> },
                    { title: "Notes", component: <NotesInfo /> },
                    { title: "Collections", component: <CollectionsInfo /> },
                    { title: "Friends", component: <FriendsInfo /> },
                    { title: "Account", component: <AccountInfo /> },

                ].map((section, index) =>

                    <CollapsibleSection title={section.title} key={index} index={index}>{section.component}</CollapsibleSection>

                )}

            </div>

            <Nav />

        </div>

    )

}

export default Dashboard
