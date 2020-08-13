import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//external
import { createStore, combineReducers, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import { Provider } from "react-redux"

//reducers
import SubmitFormReducer from "./Store/Reducers/0_submit_form_reducer"
import NoteToggleReducer from "./Store/Reducers/1_note_reducer"
import AuthenticationReducer from "./Store/Reducers/2_authentication_user"
import ActiveNavReducer from "./Store/Reducers/3_active_nav_link_reducer"
import ProfileImageReducer from "./Store/Reducers/4_profile_image_handler"
import DragAndDropReducer from "./Store/Reducers/5_drag_and_drop_reducer"

const rootReducer = combineReducers({ //combine all the state reducers into one root reducer

  form: SubmitFormReducer,
  note: NoteToggleReducer,
  auth:AuthenticationReducer,
  nav:ActiveNavReducer,
  profile_image: ProfileImageReducer,
  drag_and_drop: DragAndDropReducer

})

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>

      <App />

    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);