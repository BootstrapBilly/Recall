import firebase from "firebase/app"
import "firebase/storage"

var config = {
    apiKey: "AIzaSyDTz5nIq_YbYGqJ7pxW9QuBRaFMQlMFPHs",
    authDomain: "get-recall.firebaseapp.com",
    databaseURL: "https://get-recall.firebaseio.com",
    projectId: "get-recall",
    storageBucket: "get-recall.appspot.com",
    messagingSenderId: "589596752359",
    appId: "1:589596752359:web:44b51e35ab197015b5e542",
    measurementId: "G-24GZPK2XPD"
  };

  firebase.initializeApp(config)

  const storage = firebase.storage()

  export {
      storage, firebase as default
  }