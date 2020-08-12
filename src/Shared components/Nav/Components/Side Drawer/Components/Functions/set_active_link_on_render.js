import { set_active_link } from "../../../../../../Store/Actions/3_active_nav_link_action"


const set_active_link_on_render = (dispatch) => {

    const href = window.location.href.split("//")[1].split("/")[1]//get the current url

    let current_page//define a variable to hold the current page

    switch (href) {

        //set the current page based on the url

        case "dashboard": current_page = "home"
            break
        case "add_new": current_page = "Add a note"
            break
        case "view_all": current_page = "View notes"
            break
        case "combine_notes": current_page = "Combine notes"
            break
        case "friends": current_page = "Friends"
            break
        case "account": current_page = "Account"
            break
        default: current_page = "home"

    }

    dispatch(set_active_link(current_page))//update the active page/link in redux so that the nav icon becomes active

}

export default set_active_link_on_render