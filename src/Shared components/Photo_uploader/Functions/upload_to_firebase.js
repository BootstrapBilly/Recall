import {storage} from "../../../firebase/index"

import {spinner} from "../../../Assets/Spinners/Photo_spinner.svg"

import {handle_upload_error_action, reload_search_result_action, set_url_in_database} from "../../../Store/Actions/4_photo_upload_handler_action"

const upload_to_firebase = (event, user_id, state, set_state, dispatch) => {

    //upload the given photo, named by year and condition (from props) to firebase
    const upload_task = storage.ref(`images/${user_id.toString()}`)

        .put(event.target.files[0])

        set_state({...state, image:spinner})

    upload_task.on("state_changed",

        (snapshot) => { },

        (error) => { dispatch(handle_upload_error_action(error)) }, //on error

        () => { //on success

            storage.ref("images").child(user_id.toString())//search for the photo in firebase

                .getDownloadURL()//get the url for it from firebase

                .then(url => {

                    set_state({...state, image:url, successful_upload:true})
   
                    dispatch(reload_search_result_action({ url: url}))//reload the book with the new photo
               
                    // dispatch(set_url_in_database({ url: url, year:year, condition: condition }))//Add the new url to the mongodb database to be fetched with future requests

                })

        });
}

export default upload_to_firebase