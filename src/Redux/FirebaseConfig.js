import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
var firebaseConfig = {
    apiKey: "AIzaSyCqd6NlDBwIeU2pgjs-N1-C1VjM8dsnWS4",
    authDomain: "blogs-b22e6.firebaseapp.com",
    databaseURL: "https://blogs-b22e6.firebaseio.com",
    projectId: "blogs-b22e6",
    storageBucket: "blogs-b22e6.appspot.com",
    messagingSenderId: "315166670406",
    appId: "1:315166670406:web:e3f0ba35701940cba61447"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore()

  export default firebase